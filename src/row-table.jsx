import React from 'react';

export default class RowTable{

	render(){
		let {avaUrl, firstName, lastName} = this.props;
		return (
			<tr>
				<td className="tableUser__col-1">
					<img src={avaUrl} />
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
