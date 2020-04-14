import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Trip = props => (
    <tr>
        <td>{props.trip.location}</td>
        <td>{props.trip.landmark}</td>
        <td>{props.trip.viewpoint}</td>
        <td>{props.trip.photospot}</td>
        <td>{props.trip.cafe}</td>
        <td>
            <Link to={"/edit/"+props.trip._id}>edit</Link> | <a href="https://my-travelplanner.herokuapp.com/trip/delete/" onClick={() => { props.deleteTrip(props.trip._id) }}>delete</a>
        </td>
    </tr>
)

export default class Triplist extends Component {
    constructor(props) {
        super(props);

        this.deleteTrip = this.deleteTrip.bind(this)

        this.state = {trip: []};
    }

    componentDidMount() { 
        axios.get('https://my-travelplanner.herokuapp.com/trip/')
        .then(response => {
            this.setState({ trip: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deletTrip(id) {
        axios.delete('https://my-travelplanner.herokuapp.com/trip/'+id)
        .then(response => { console.log(response.data)});

        this.setState({
            trip: this.state.trip.filter(el => el._id !== id)
        })
    }

    triplist() {
        return this.state.trip.map(currenttrip => {
            return <Trip trip={currenttrip} deletetrip={this.deleteTrip} key={currenttrip._id}/>;
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
                        { this.triplist() }
                    </tbody>
                </table>
            </div>
        )
    }
}