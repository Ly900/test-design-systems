import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h2>Testing out Design Systems</h2>

				<p>
					Lorem ipsum dolor sit amet consectetur adipiscing, elit proin sagittis
					porta a ac nam, morbi maecenas integer ante lectus. Phasellus porta
					quis tortor sociosqu augue elementum leo praesent magna lacinia,
					sagittis primis faucibus potenti in nullam iaculis feugiat natoque,
					massa sociis eu mus molestie senectus aliquet blandit eget. Natoque
					accumsan lacus pharetra netus tellus cubilia fusce enim facilisi, vel
					nunc ridiculus faucibus commodo nulla mus auctor ullamcorper,
					habitasse parturient convallis ornare venenatis aliquet metus
					sociosqu. Urna nisl odio ullamcorper cubilia inceptos ad tristique
					velit a non, phasellus facilisis nunc lacinia sollicitudin venenatis
					suspendisse sodales congue, risus laoreet sem class dictumst libero
					vitae tortor praesent. Mauris porta curabitur scelerisque vehicula
					auctor suspendisse a potenti netus ridiculus inceptos et etiam per, mi
					tempus commodo dignissim in vulputate himenaeos molestie viverra
					nostra fringilla primis. Est feugiat aliquet bibendum aptent porta
					interdum elementum diam, class venenatis in tincidunt fusce dis
					euismod, porttitor mi aenean hendrerit congue lacinia litora. Pulvinar
					magnis maecenas tempor aenean tincidunt diam nostra natoque aptent,
					nulla hac commodo bibendum tortor congue taciti quis vulputate neque,
					senectus aliquet sapien ultrices habitant placerat ad fames. Pharetra
					montes risus aliquet dignissim posuere lobortis dapibus vulputate
					ornare inceptos, nunc a magnis nam lacus morbi massa platea senectus.
				</p>
			</div>
		</>
	);
}

export default App;
