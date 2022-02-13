import { SpinnerCircular } from 'spinners-react';
import { LoadingProps } from './Loading';

export default function LoadingCircular(props: LoadingProps) {
	return (
		<SpinnerCircular
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
