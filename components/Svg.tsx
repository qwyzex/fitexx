export interface SVGProps {
	invert?: boolean;
	width?: number;
	height?: number;
	size?: number;
}

const X = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
		</svg>
	);
};

const Pencil = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z" />
		</svg>
	);
};

const Backspace = (props: SVGProps) => {
	return (
		<svg
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M7 5h17v16h-17l-7-7.972 7-8.028zm7 6.586l-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414-2.586 2.586z" />
		</svg>
	);
};

const User = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
		</svg>
	);
};

const Plus = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
		</svg>
	);
};

const SignOut = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width ? props.width : '24'}
			height={props.height ? props.height : '24'}
			fill={props.invert ? '#000000' : '#ffffff'}
			style={{
				zoom: props.size ? props.size / 100 : 1,
			}}
		>
			<path d="M16 13v-4l8 7-8 7v-4h-6v-6h6zm0-6v-6h-16v18l8-7v-9h6v4h2z" />
		</svg>
	);
};

const Arrow = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
		</svg>
	);
};

const Trash = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
		</svg>
	);
};

const Check = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
		</svg>
	);
};

const UnCheck = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
		</svg>
	);
};

const Construction = (props: SVGProps) => {
	return (
		<svg
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M3 3v-2h3v2h12v-2h3v2h3v10h-3v9h2v1h-22v-1h2v-9h-3v-10h3zm3 10v9h12v-9h-12zm0-8h-2l-2 6h2l2-6zm8 0h-2l-2 6h2l2-6zm8 0h-2l-2 6h2l2-6zm-12 0h-2l-2 6h2l2-6zm8 0h-2l-2 6h2l2-6z" />
		</svg>
	);
};

const Home = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={props.invert ? '#000000' : '#ffffff'}
		>
			<path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
		</svg>
	);
};

const SignIn = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width ? props.width : '24'}
			height={props.height ? props.height : '24'}
			fill={props.invert ? '#000000' : '#ffffff'}
			style={{
				zoom: props.size ? props.size / 100 : 1,
			}}
		>
			<path d="M8 12v-4l8 7-8 7v-4h-8v-6h8zm2-5.024v-2.976h6v8.051l8 6.767v-16.818h-16v3.284l2 1.692z" />
		</svg>
	);
};

const Register = (props: SVGProps) => {
	return (
		<svg
			width={props.width ? props.width : '24'}
			height={props.height ? props.height : '24'}
			fill={props.invert ? '#000000' : '#ffffff'}
			style={{
				zoom: props.size ? props.size / 100 : 1,
			}}
		>
			<path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-20h7.362c4.156 0 2.638 6 2.638 6s2.313-.635 4.067-.133l1.952-1.976c-2.214-2.807-5.762-5.891-7.83-5.891h-10.189v24h20v-7.98l-2 2.025z" />
		</svg>
	);
};

const Mail = (props: SVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width ? props.width : '24'}
			height={props.height ? props.height : '24'}
			fill={props.invert ? '#000000' : '#ffffff'}
			style={{
				zoom: props.size ? props.size / 100 : 1,
			}}
		>
			<path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
		</svg>
	);
};

const SVG = {
	X,
	Pencil,
	Backspace,
	User,
	Plus,
	SignOut,
	SignIn,
	Register,
	Arrow,
	Trash,
	Check,
	UnCheck,
	Construction,
	Home,
	Mail,
};

export default SVG;
