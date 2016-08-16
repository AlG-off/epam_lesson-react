require("./index.css");

import React from 'react';
import ReactDOM from 'react-dom';
import SearchUser from './src/search-user';
import TableUser from './src/table-user';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstName:'',
            lastName:'',
            email:'',
            gender:'',
            avatar:''
        }
    }
    fetchUser() {
        let url = 'http://dselkirk.getsandbox.com/users';
        fetch(url)
            .then((res) => res.json() )
            .then((data) => {
                this.setState({

								})
            })
            .catch((error) => console.log('Oops! . There Is A Problem') )
    }
    componentDidMount() {
        this.fetchProfile(this.state.username);
    }
    render() {
        return (
            <div>
                <section id="card">
                    <SearchProfile fetchProfile={this.fetchProfile.bind(this)}/>
                    <Profile data={this.state} />
                </section>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("#myApp"));
