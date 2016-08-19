import React from 'react';
import RowTable from './row-table';
import {sortByLastName} from './sort-table';

export default class TableUser extends React.Component{
	constructor(props){
		super(props)
		this.altState = this.props.altState;
	}
	onClick(e){
		e.preventDefault();
		let target = e.target;
		if(target.tagName === "TH" && target.classList.contains("tableUser__col-3")) {
			let sortRezult = sortByLastName(this.props.data.usersList, this.props.data.sortDir);
			this.altState({
				userList:sortRezult.usersList,
				profileSidebar:sortRezult.usersList[0],
				sortDir:sortRezult.sortDir
			})
		}
		if(target.closest("tr") && target.closest("tbody")){
			let usersList = this.props.data.usersList;
			let id = target.closest("tr").dataset.id;
			let i = usersList.findIndex( item => item.id == id);
			this.altState({
				profileSidebar:usersList[i]
			})
		}
	}
	render(){
		let data = this.props.data;
		let usersList = data.usersList;
		let rowsCollection = usersList.map( item => <RowTable id={item.id} avaUrl={item.avatar} firstName={item.first_name} lastName={item.last_name} />);
		let sortTypes = ( sortDir => {
			if(sortDir === '') return "";
			return	sortDir === 'ASC' ? '↓' : '↑';
		})(data.sortDir);

		return (
			<table className="tableUser" onClick={this.onClick.bind(this)}>
				<thead className="tableUser__head">
				<tr>
					<th className="tableUser__col-1"></th>
					<th className="tableUser__col-2">First Name</th>
					<th className="tableUser__col-3">Last Name {sortTypes}</th>
				</tr>
				</thead>
				<tbody>
					{rowsCollection}
				</tbody>
			</table>
		)
	}
}
