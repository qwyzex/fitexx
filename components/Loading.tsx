import { SpinnerDotted } from 'spinners-react';

export interface LoadingProps {
	size?: number;
	color?: string;
	thickness?: number;
	fixed?: boolean;
	absolute?: boolean;
}

export default function Loading(props: LoadingProps) {
	return (
		<SpinnerDotted
			speed={150}
			size={props.size ? props.size : 75}
			color={props.color ? props.color : '#6114f1'}
			thickness={props.thickness ? props.thickness : 100}
			style={{
				position: props.fixed
					? 'fixed'
					: props.absolute
					? 'absolute'
					: 'relative',
				zIndex: 100,
				top: props.fixed || props.absolute ? '50%' : '',
				left: props.fixed || props.absolute ? '50%' : '',
				transform:
					props.fixed || props.absolute
						? 'translate(-50%, -50%)'
						: '',
			}}
		/>
	);
}
