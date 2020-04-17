import React, { Component } from "react";
import axios from "axios";

export default class CreateTrip extends Component {
  constructor(props) {
    super(props);

    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeLandmark = this.onChangeLandmark.bind(this);
    this.onChangeViewpoint = this.onChangeViewpoint.bind(this);
    this.onChangePhotospot = this.onChangePhotospot.bind(this);
    this.onChangeCafe = this.onChangeCafe.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      location: "",
      landmark: "",
      viewpoint: "",
      photospot: "",
      cafe: "",
    };
  }

  // componentDidMount() {
  //     this.setState({
  //         location: 'test location'
  //     })
  // }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeLandmark(e) {
    this.setState({
      landmark: e.target.value,
    });
  }

  onChangeViewpoint(e) {
    this.setState({
      viewpoint: e.target.value,
    });
  }

  onChangePhotospot(e) {
    this.setState({
      photospot: e.target.value,
    });
  }

  onChangeCafe(e) {
    this.setState({
      cafe: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const trip = {
      location: this.state.location,
      landmark: this.state.landmark,
      viewpoint: this.state.viewpoint,
      photospot: this.state.photospot,
      cafe: this.state.cafe,
    };

    console.log(trip);

    axios
      .post("api/trip/", trip)
      .then((res) => console.log(res.body));

    // window.location = '/mytrips'
  }
  render() {
    return (
      <div>
        <h3>Plan a new trip</h3>
        <p>
          Add all the places you would like to visit during your trip and don't
          forget to add those import coffee stops in some local cafes
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>
          <div className="form-group">
            <label>Landmark: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.landmark}
              onChange={this.onChangeLandmark}
            />
          </div>
          <div className="form-group">
            <label>Viewpoint: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.viewpoint}
              onChange={this.onChangeViewpoint}
            />
          </div>
          <div className="form-group">
            <label>Photospot: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.photospot}
              onChange={this.onChangePhotospot}
            />
          </div>
          <div className="form-group">
            <label>Cafe: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.cafe}
              onChange={this.onChangeCafe}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Trip Plan"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
