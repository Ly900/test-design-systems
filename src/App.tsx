import './App.css';
// import '@cloudscape-design/global-styles/index.css';
// import Button from '@cloudscape-design/components/button';

import { useState } from 'react';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Input from '@cloudscape-design/components/input';
import Button from '@cloudscape-design/components/button';

function App() {
	const [value, setValue] = useState('');

	return (
		<>
			<div>
				<h2>Testing out Design Systems</h2>
				<h3>h3 - Testing out Design Systems</h3>
				<h4>h4 - Testing out Design Systems</h4>
				<h5>h5 - Testing out Design Systems</h5>

				<p>
					Lorem ipsum dolor sit amet consectetur adipiscing, elit proin sagittis
					porta a ac nam, morbi maecenas integer ante lectus. Phasellus porta
					quis tortor sociosqu augue elementum leo praesent magna lacinia,
					sagittis primis faucibus potenti in nullam iaculis feugiat natoque,
					massa sociis eu mus molestie senectus aliquet blandit eget. Natoque
					accumsan lacus pharetra netus tellus cubilia fusce enim facilisi, vel
				</p>

				<button>Button</button>

				<ul>
					<li>
						<a href="#">link</a>
					</li>
					<li>
						<a href="#">link</a>
					</li>
					<li>
						<a href="#">link</a>
					</li>
				</ul>

				<p>
					<a href="#">link in a p</a>
				</p>

				<img src="https://picsum.photos/200/300" />

				<form>
					<label>
						Enter your name:
						<input type="text" />
					</label>
				</form>

				<h2>Imported Components Below</h2>

				<Button>Hello!</Button>

				<SpaceBetween size="m">
					<Header variant="h2">Hello World!</Header>

					<Container>
						<SpaceBetween size="l">
							<span>Start editing to see some magic happen</span>

							<Input
								value={value}
								onChange={(event) => setValue(event.detail.value)}
							/>
							<Button variant="primary">Click me</Button>

							<Button iconName="settings" variant="icon" />

							<Button
								disabled
								disabledReason="This action is available in the primary region. You need to switch regions."
								variant="primary"
							>
								Delete
							</Button>
						</SpaceBetween>
					</Container>
				</SpaceBetween>
			</div>
		</>
	);
}

export default App;
