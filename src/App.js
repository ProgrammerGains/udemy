import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
	apiKey: 'e2d264d390f14ad084cf40d3120e29d3'
});

const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800
			}
		},
		line_linked: {
			shadow: {
				enable: true,
				color: "#3CA9D1",
				blur: 5
			}
		}
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: ''
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value)
	}

	onButtonSubmit = () => {
		app.models.predict("e2d264d390f14ad084cf40d3120e29d3", "https://samples.clarifai.com/demographics.jpg").then(
				function (response) {
					console.log(response);
				},
				function (err) {
					// there was an error
				}
		);
	}

	render() {
		return (
				<div className="App">
					<Particles className='particles'
					           params={particlesOptions}/>
					<Navigation/>
					<Logo/>
					<Rank/>
					<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>

				</div>
		);
	}
}

export default App;
