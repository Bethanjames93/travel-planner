import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class Navbar extends Component {
    render() {
        return(
            <div style={{height: '550px', position: 'relative'}}>
                <Layout style={{background: 'url(https://images.unsplash.com/photo-1587172653333-4d85727afdc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80) center / cover'}}>
                     <Header transparent title="Trip Planner" style={{color: 'grey'}}>
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/create">Create Trip</a>
                            <a href="/mytrips">My Trips</a>
                            <a href="/login">Login</a>
                        </Navigation>
                    </Header>
                    <Drawer title="Trip Planner">
                        <Navigation>
                            <a href="/">Home</a>
                            <a href="/create">Create Trip</a>
                            <a href="/mytrips">My Trips</a>
                            <a href="/login">Login</a>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
            </div>
          
        )
    }
}

export default Navbar;
