import React from 'react';
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Copyright from '../components/Copyright'
class Dashboard extends React.Component {

    constructor(){
        super();
    }

    render() {
        return (
<div>
    <Navbar/>
    <main>
    <Main/>
    </main>
    <Copyright/>
    
</div>
        );
    }
}

export default Dashboard;