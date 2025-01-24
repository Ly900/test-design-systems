import './App.scss';

// Cloudscape Design System Imports
// import '@cloudscape-design/global-styles/index.css';

// import Header from '@cloudscape-design/components/header';
// import Container from '@cloudscape-design/components/container';
// import SpaceBetween from '@cloudscape-design/components/space-between';
// import Input from '@cloudscape-design/components/input';
// import Button from '@cloudscape-design/components/button';

// Bootstrap Imports
// import bootstrap from './bootstrap.js';

// Carbon Design System Imports
import { Button } from '@carbon/react';

function App() {
	return (
		<>
			<div>
				<h1>h1 - Testing out Design Systems</h1>
				<h2>h2 - Testing out Design Systems</h2>
				<h3>h3 - Testing out Design Systems</h3>
				<h4>h4 - Testing out Design Systems</h4>
				<h5>h5 - Testing out Design Systems</h5>
				<h6>h6 - Testing out Design Systems</h6>

				<p>
					Lorem ipsum dolor sit amet <a href="#">leo</a> consectetur adipiscing,
					elit proin sagittis porta a ac nam, morbi maecenas integer ante
					lectus. Phasellus porta quis tortor sociosqu augue elementum praesent
					magna lacinia, sagittis primis faucibus potenti in nullam iaculis
					feugiat natoque, massa sociis.
				</p>

				<form>
					<label>
						Enter your name:
						<input type="text" />
					</label>
				</form>

				<span>Span</span>

				<hr></hr>

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

				<ol>
					<li>
						<a href="#">link</a>
					</li>
					<li>
						<a href="#">link</a>
					</li>
					<li>
						<a href="#">link</a>
					</li>
				</ol>

				<img src="https://picsum.photos/200/300" />

				<h2>Browser Styles v. Cloudscape Global Styles</h2>

				<div>
					<img src="https://ly900.github.io/test-design-systems/no-global-styles.png" />
					<img src="https://ly900.github.io/test-design-systems/cloudscape-global-styles.png" />
				</div>

				<h2>Browser Styles v. Bootstrap Global Styles</h2>

				<div>
					<img src="https://ly900.github.io/test-design-systems/no-global-styles.png" />
					<img src="https://ly900.github.io/test-design-systems/bootstrap-global-styles.png" />
				</div>
				{/* Cloudscape Design System */}

				<h2>Cloudscape Components Below</h2>

				{/* <Button>Hello!</Button> */}

				{/* <SpaceBetween size="m">
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
				</SpaceBetween> */}

				<div className="custom-panel">Custom Panel</div>

				<h2>Carbon Components Below</h2>
				<Button>Example usage</Button>
			</div>
		</>
	);
}

export default App;
