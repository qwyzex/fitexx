/* eslint-disable react-hooks/exhaustive-deps */
import {
	addDoc,
	collection,
	CollectionReference,
	deleteDoc,
	doc,
	DocumentData,
	getDocs,
	orderBy,
	Query,
	query,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import styles from '../styles/Dashboard.module.sass';
import { db, auth } from '../firebase';
import { useEffect, useState } from 'react';
import firerr from 'firerr';
import Loading from './Loading';
import SVG from './Svg';
import LoadingCircular from './LoadingCircular';

const Dashboard = () => {
	const [user] = useAuthState(auth);

	const todosRef: CollectionReference<DocumentData> = collection(db, `users/${user!.uid}/todos`);

	const todosQueryUnfinished: Query<DocumentData> = query(todosRef, orderBy('createdAt'));
	const [todosDataUnfinished] = useCollectionData(todosQueryUnfinished, {
		idField: 'id',
	});

	const todosQueryFinished: Query<DocumentData> = query(todosRef, orderBy('createdAt'));
	const [todosDataFinished] = useCollectionData(todosQueryFinished, {
		idField: 'id',
	});

	const [loading, setLoading] = useState(true);
	const [addingTodo, setAddingTodo] = useState(false);
	const [openedTodosTab, setOpenedTodosTab] = useState('ongoing');

	const [formValueTodoItem, setFormValueTodoItem] = useState('');
	const [formError, setFormError] = useState('');

	async function addTodo(e: any) {
		e.preventDefault();
		setAddingTodo(true);
		await addDoc(todosRef, {
			title: formValueTodoItem,
			uid: user!.uid,
			createdAt: serverTimestamp(),
			complete: false,
			favorite: false,
			tag: [],
		})
			.then(() => {
				setFormValueTodoItem('');
				setAddingTodo(false);
			})
			.catch((err) => {
				setAddingTodo(false);
				const code: string = err.code;
				firerr(code, setFormError);
			});
	}

	useEffect(() => {
		async function getTodosDocuments() {
			await getDocs(todosQueryFinished);
			await getDocs(todosQueryUnfinished);
		}
		getTodosDocuments()
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				firerr(err.code, setFormError);
			});
	}, []);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>FiteXX</h1>
				<div>
					<nav>
						<button
							disabled={
								openedTodosTab === 'ongoing' ? true : false
							}
							onClick={() => setOpenedTodosTab('ongoing')}
						>
							ONGOING
						</button>
						<button
							disabled={
								openedTodosTab === 'completed' ? true : false
							}
							onClick={() => setOpenedTodosTab('completed')}
						>
							COMPLETED
						</button>
					</nav>
				</div>
			</header>
			<div
				className={`${styles.todoListContainer}  ${
					openedTodosTab === 'completed'
						? styles.completed
						: openedTodosTab === 'ongoing'
						? styles.ongoing
						: ''
				} `}
			>
				{!loading ? (
					<>
						<section
							className={styles.ongoingTask}
							id={'unfinished_list'}
							onClick={() => {
								if (openedTodosTab === 'completed') {
									setOpenedTodosTab('ongoing');
								}
							}}
							style={
								openedTodosTab === 'completed'
									? {
											left: '-90%',
											opacity: 0.4,
											userSelect: 'none',
											width: '80%',
											height: '80%',
											cursor: 'pointer',
									  }
									: {
											left: '0',
											opacity: 1,
									  }
							}
						>
							<header>
								<h1>
									<SVG.Construction invert /> ONGOING
								</h1>
								<span>
									(
									{todosDataUnfinished &&
										todosDataUnfinished.filter(
											(todo) => todo.complete === false
										)?.length}
									)
								</span>
							</header>
							<main
								style={{
									pointerEvents:
										openedTodosTab === 'ongoing'
											? 'all'
											: 'none',
								}}
							>
								{todosDataUnfinished?.filter(
									(todo) => todo.complete === false
								)?.length
									? todosDataUnfinished
											.filter(
												(todo) =>
													todo.complete === false
											)
											.map((todo: any) => (
												<TodoList
													key={todo.id}
													id={todo.id}
													title={todo.title}
													status={todo.complete}
													todoRef={todosRef}
												/>
											))
									: 'You Have No Active Task!'}
							</main>
						</section>
						<section
							className={styles.completedTask}
							id={'finished_list'}
							onClick={() => {
								if (openedTodosTab === 'ongoing') {
									setOpenedTodosTab('completed');
								}
							}}
							style={
								openedTodosTab === 'ongoing'
									? {
											left: '110%',
											opacity: 0.4,
											userSelect: 'none',
											width: '80%',
											height: '80%',
											cursor: 'pointer',
									  }
									: {
											left: '0',
											opacity: 1,
									  }
							}
						>
							<header>
								<h1>
									<SVG.Check invert /> COMPLETED
								</h1>
								<span>
									(
									{todosDataFinished &&
										todosDataFinished.filter(
											(todo) => todo.complete === true
										)?.length}
									)
								</span>
							</header>
							<main
								style={{
									pointerEvents:
										openedTodosTab === 'completed'
											? 'all'
											: 'none',
								}}
							>
								{todosDataFinished?.filter(
									(todo) => todo.complete === true
								)?.length
									? todosDataFinished
											.filter(
												(todo) => todo.complete === true
											)
											.map((todo: any) => (
												<TodoList
													key={todo.id}
													id={todo.id}
													title={todo.title}
													status={todo.complete}
													todoRef={todosRef}
												/>
											))
									: 'You Have No Finished Task!'}
							</main>
						</section>
					</>
				) : (
					<Loading />
				)}
			</div>
			<form onSubmit={addTodo} className={styles.form}>
				<input
					type="text"
					value={formValueTodoItem}
					readOnly={addingTodo ? true : false}
					required
					onChange={(e) => setFormValueTodoItem(e.target.value)}
					placeholder={'What To Do? :3'}
				/>
				<button
					type="submit"
					disabled={
						addingTodo
							? true
							: formValueTodoItem === ''
							? true
							: false
					}
					className="global"
				>
					{addingTodo ? (
						<>
							<LoadingCircular
								color="#fff"
								size={25}
								thickness={270}
							/>
						</>
					) : (
						<>
							<SVG.Plus />
						</>
					)}
				</button>
			</form>
			<div className="formError">
				{formError != '' && <p>{formError}</p>}
			</div>
		</div>
	);
};

export interface TodoItemProps {
	id: string;
	title: string;
	status: boolean;
	todoRef: CollectionReference<DocumentData>;
}

export const TodoList = (props: TodoItemProps) => {
	const [user] = useAuthState(auth);
	const todosRef = collection(db, `users/${user!.uid}/todos`);

	async function deleteTodo(id: string) {
		const docRef = doc(todosRef, id);
		if (confirm('Are you sure you want to delete this task?')) {
			await deleteDoc(docRef);
		}
	}

	async function deleteTodoForce(id: string) {
		const docRef = doc(todosRef, id);
		await deleteDoc(docRef);
	}

	async function checkTodo(docId: string) {
		const docRef = doc(todosRef, docId);
		await updateDoc(docRef, {
			complete: true,
		});
	}

	async function unCheckTodo(docId: string) {
		const docRef = doc(todosRef, docId);
		await updateDoc(docRef, {
			complete: false,
		});
	}

	function editTodo(stateRef: any, setStateRef: any) {
		setStateRef(!stateRef);
	}

	async function saveEditTodo(docId: string, formValue: string) {
		const docRef = doc(todosRef, docId);
		await updateDoc(docRef, {
			title: formValue,
		});
	}

	const Todo = {
		deleteTodo,
		checkTodo,
		unCheckTodo,
		editTodo,
		saveEditTodo,
		deleteTodoForce,
	};

	return (
		<li id={props.id} tabIndex={-10}>
			<input
				type="text"
				name="todo"
				defaultValue={props.title}
				spellCheck={false}
				onBlur={async (e) => {
					const docRef = doc(props.todoRef, props.id);
					await updateDoc(docRef, {
						title: e.target.value,
					});
				}}
			/>
			<button
				className={styles.checkButton}
				onClick={() =>
					props.status
						? Todo.unCheckTodo(props.id)
						: Todo.checkTodo(props.id)
				}
			>
				{props.status ? <SVG.Check /> : <SVG.UnCheck />}
			</button>

			<button
				className={styles.deleteButton}
				onClick={() => Todo.deleteTodo(props.id)}
			>
				<SVG.Trash />
			</button>
		</li>
	);
};

export default Dashboard;
