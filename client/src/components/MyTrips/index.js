import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Trip = props => (
    <tr>
        <td>{props.trip.location}</td>
        <td>{props.trip.landmark}</td>
        <td>{props.trip.viewpoint}</td>
        <td>{props.trip.photospot}</td>
        <td>{props.trip.cafe}</td>
        {/* <td>
            <Link to={"/edit/"+props.trip._id}>edit</Link> | <a href="https://my-travelplanner.herokuapp.com/trip/delete/" onClick={() => { props.deleteTrip(props.trip._id) }}>delete</a>
        </td> */}
    </tr>
)

export default class Triplist extends Component {
    constructor(props) {
        super(props);

        this.state = {trips: []};
    }

    componentDidMount() { 
        axios.get('/api/trips/')
        .then(response => {
            console.log(response.body)
            this.setState({ trips: response.body })
        })
        .catch((error) => {
            console.log(error);
        })
    }


    triplist() {
        return this.state.trips.map(currenttrip => {
            return <Trip trip={currenttrip} key={currenttrip._id}/>;
        })
    }
    render() {
        return (
            <div>
                <h3>My Trips</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Location</th>
                            <th>Landmark</th>
                            <th>Viewpoint</th>
                            <th>Photospot</th>
                            <th>Cafe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { this.state.trips.map(currenttrip => {
            return <Trip trip={currenttrip} key={currenttrip._id}/>;
        })} */}
                    </tbody>
                </table>
            </div>
        )
    }
}