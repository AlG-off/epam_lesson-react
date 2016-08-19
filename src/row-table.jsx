import React from 'react';

export default class RowTable extends React.Component{
	render(){
		let {id, avaUrl, firstName, lastName} = this.props;
		return (
			<tr data-id={id}>
				<td className="tableUser__col-1">
					<img className="tableUser__user-avatar" src={avaUrl} />
				</td>
				<td className="tableUser__col-2">
					{firstName}
				</td>
				<td className="tableUser__col-3">
					{lastName}
				</td>
			</tr>
		)
	}
}
