import { collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

const todosRef = collection(db, 'todos');


// export default Todo;
