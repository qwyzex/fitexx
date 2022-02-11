import { SpinnerCircular } from 'spinners-react';

export default function LoadingCircular({ fixed, absolute, color, size, thickness }: any) {
	return (
		<SpinnerCircular
			speed={150}
			size={size ? size : 75}
			color={color ? color : '#6114f1'}
			thickness={thickness ? thickness : 100}
			style={{
				position: fixed ? 'fixed' : absolute ? 'absolute' : 'relative',
				zIndex: 100,
				top: fixed || absolute ? '50%' : '',
				left: fixed || absolute ? '50%' : '',
				transform: fixed || absolute ? 'translate(-50%, -50%)' : '',
			}}
		/>
	);
};
