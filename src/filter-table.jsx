import React from 'react';

export default class FilterBar extends React.Component {
	constructor(props){
		super(props);
		this.altState = this.props.altState;
	}
	onKeyUp(e){
		e.preventDefault();
		let val = e.target.value;
		let regexp = new RegExp(val,'i');
		let userList = this.props.data.usersList;
		let userListFiltered = val.length ? filterUser(userList, regexp) : this.props.data._ORIGINAL_USER_LIST;
		this.altState({
			usersList: userListFiltered,
			profileSideBar: userListFiltered[0],
		});
		function filterUser(data, regexp) {
			return data.filter(item =>  ~item['first_name'].search(regexp));
		}
	}
	render(){
		return(
		<div className="filter-bar">
			<input onKeyUp={this.onKeyUp.bind(this)} className="filter-bar__input" placeholder="Filter by First Name"/>
		</div>)
	}
}
