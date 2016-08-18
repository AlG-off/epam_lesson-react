require("./index.css");

import React from 'react';
import ReactDOM from 'react-dom';
import TableUser from './src/table-user';
import FilterBar from './src/filter-table';
import SideBar from './src/side-bar';

class App extends React.Component {
  constructor() {
  	super()
		this._ORIGINAL_USER_LIST = '';
    this.state = {
			usersList: '',
			profileSideBar:'',
			sortDir:''
		}
  }
  fetchUsers() {
  	let url = 'http://dselkirk.getsandbox.com/users';
    	fetch(url)
				.then(res => res.json() )
        .then(data => {
					data = data.length(100);
					this._ORIGINAL_USER_LIST = data;
        	this.setState({
						usersList: data,
						profileSideBar:data[0]
					})
        })
  			.catch((error) => console.log('Oops! . There Is A Problem') )
  }
  componentDidMount() {
  	this.fetchUsers();
  }
  render() {
    	return (
      	<div>
        	<FilterBar data={this.state} altState={this.setState.bind(this)}/>
          <TableUser data={this.state} altState={this.setState.bind(this)}/>
					<SideBar  userProfile={this.state.profileSideBar} />
				</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("#myApp"));
