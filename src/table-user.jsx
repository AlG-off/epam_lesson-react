import React from 'react';
import RowTable from 'row-table';

export default class TableUser{
	render(){
		let userList = this.props.userList;
		let rowsCollection = userList.map( (item) => <RowTable avaUrl={item.avatar} firstName={item.first_name} lastName={item.last_name} />);
		let headTable = (
			<tr>
				<th className="tableUser__col-1"></th>
				<th className="tableUser__col-2">First Name</th>
				<th className="tableUser__col-3">Last Name</th>
			</tr>)
		return (
			<table className="tableUser">
				{headTable}
				{rowsCollection}
			</table>
		)
	}
}
