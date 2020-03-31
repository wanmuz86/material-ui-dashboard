import React from 'react';
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Copyright from '../components/Copyright'
class Dashboard extends React.Component {

    constructor(){
        super();
        this.state = {
            places:[]
        }

    }
    componentDidMount(){
        fetch(`https://rest-api-wanmuz.herokuapp.com/api/places`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    places:result.data
                })
            
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error)
            }
        )
    }

    render() {
        return (
<div>
    <Navbar/>
    <main>
    <Main places={this.state.places}/>
    </main>
    <Copyright/>
    
</div>
        );
    }
}

export default Dashboard;