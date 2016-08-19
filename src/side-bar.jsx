import React from 'react';

export default class Sidebar extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let userProfile = this.props.userProfile;
		return(
			<div className="side-bar">
				<div className="side-bar__user">
					<img src={userProfile['avatar']} alt='user avatar' className='user__avatar' />
					<p className='user__name'>{userProfile['first_name']} {userProfile['last_name']}</p>
					<p className='user__gender'>{userProfile['gender']}</p>
					<p className='user__email'>{userProfile['email']}</p>
				</div>
			</div>
		)
	}
}
