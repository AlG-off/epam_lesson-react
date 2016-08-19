require("./index.css");

import React from 'react';
import ReactDOM from 'react-dom';
import TableUser from './src/table-user';
import FilterBar from './src/filter-table';
import SideBar from './src/side-bar';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			_ORIGINAL_USER_LIST:[],
			usersList:[],
			profileSidebar:{},
			sortDir:''
		}

	}

	componentWillMount() {
		this.fetchUsers();
	}

	fetchUsers() {
		let url = 'http://dselkirk.getsandbox.com/users';
		fetch(url)
			.then((res) => res.json() )
			.then((data) => {
				data.length = 50;
				this.setState({
					_ORIGINAL_USER_LIST: data,
					usersList: data,
					profileSidebar:data[0]
				})
			})
			.catch((error) => console.log('Oops! . There Is A Problem') )
	}

	render() {
		return (
			<div className="container">
				<FilterBar data={this.state} altState={this.setState.bind(this)}/>
				<div className="user-container">
					<TableUser data={this.state} altState={this.setState.bind(this)}/>
					<SideBar  userProfile={this.state.profileSidebar} />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("myApp"));
