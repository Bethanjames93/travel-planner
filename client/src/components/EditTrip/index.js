// import React, { Component } from "react";
// import axios from "axios";

// export default class EditTrip extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeLocation = this.onChangeLocation.bind(this);
//     this.onChangeLandmark = this.onChangeLandmark.bind(this);
//     this.onChangeViewpoint = this.onChangeViewpoint.bind(this);
//     this.onChangePhotospot = this.onChangePhotospot.bind(this);
//     this.onChangeCafe = this.onChangeCafe.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       location: "",
//       landmark: "",
//       viewpoint: "",
//       photospot: "",
//       cafe: "",
//     };
//   }

//   componentDidMount() {
//       axios.get('https://my-travelplanner.herokuapp.com/trip/'+this.props.match.params.id)
//       .then(response => {
//         this.setState({
//             location: response.data.location,
//             landmark: response.data.landmark,
//             viewpoint: response.data.viewpoint,
//             photospot: response.data.photospot,
//             cafe: response.data.cafe
//         })
//       })
//       .catch(function (error) {
//           console.log(error);
//       }) 
//   }

//   onChangeLocation(e) {
//     this.setState({
//       location: e.target.value,
//     });
//   }

//   onChangeLandmark(e) {
//     this.setState({
//       landmark: e.target.value,
//     });
//   }

//   onChangeViewpoint(e) {
//     this.setState({
//       viewpoint: e.target.value,
//     });
//   }

//   onChangePhotospot(e) {
//     this.setState({
//       photospot: e.target.value,
//     });
//   }

//   onChangeCafe(e) {
//     this.setState({
//       cafe: e.target.value,
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const trip = {
//       location: this.state.location,
//       landmark: this.state.landmark,
//       viewpoint: this.state.viewpoint,
//       photospot: this.state.photospot,
//       cafe: this.state.cafe,
//     };

//     console.log(trip);

//     axios
//       .post('https://my-travelplanner.herokuapp.com/trip/update/' + this.props.match.params.id, trip)
//       .then((res) => console.log(res.data));

//     window.location = '/mytrips'
//   }

//   render() {
//     return (
//       <div>
//         <h3>Edit Your Trip Plan</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Location: </label>
//             <input
//               type="text"
//               required
//               className="form-control"
//               value={this.state.location}
//               onChange={this.onChangeLocation}
//             />
//           </div>
//           <div className="form-group">
//             <label>Landmark: </label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.landmark}
//               onChange={this.onChangeLandmark}
//             />
//           </div>
//           <div className="form-group">
//             <label>Viewpoint: </label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.viewpoint}
//               onChange={this.onChangeViewpoint}
//             />
//           </div>
//           <div className="form-group">
//             <label>Photospot: </label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.photospot}
//               onChange={this.onChangePhotospot}
//             />
//           </div>
//           <div className="form-group">
//             <label>Cafe: </label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.cafe}
//               onChange={this.onChangeCafe}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="submit"
//               value="Edit Trip Plan"
//               className="btn btn-primary"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
