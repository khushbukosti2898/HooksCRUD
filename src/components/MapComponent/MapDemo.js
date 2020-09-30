import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


class MapDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [{ axis: { lat: 23.0264, lng: 72.5819 }, name: "Lal darawaja" },
      { axis: { lat: 23.0274, lng: 72.5606 }, name: "Law Garden" },
      { axis: { lat: 23.0063, lng: 72.6026 }, name: "Kankria" },
      { axis: { lat: 23.048840, lng: 72.655251 }, name: "big Bajar" },
      ],
      selectedMarker: { lat: 23.0063, lng: 72.6026 },
      isOpen: false,
      selectedPlace: {},
      activeMarker: {},
      userLocation: { lat: 32, lng: 32 }
    }
  }

  handleToggleOpen = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      isOpen: true
    });
  };

  handleToggleClose = () => {
    console.log("h")
    this.setState({
      selectedPlace: {},
      activeMarker: {},
      isOpen: false,
    });
  };
  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        userLocation: { lat: latitude, lng: longitude },
      });
    });
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }
  onMapClicked() {
    console.log("map clicked")
  }
  render() {
    const { userLocation, places, isOpen } = this.state;
    const mapStyles = {
      width: '50%',
      height: '80%',
      border: "2px solid blue",
      margin: "10px"
    };
    return (
      <div style={{ width: "500px" }}>
        <Map
          google={this.props.google}
          style={mapStyles} 
          center={userLocation}
          zoom={10}
          onClick={this.onMapClicked}
        >
          {places.map((p, i) => {
            return (<Marker onClick={this.handleToggleOpen}
              name={p.name}
              position={p.axis}
              key={i}
            >
            </Marker>)
          })}
          <InfoWindow marker={this.state.activeMarker} onClose={this.handleToggleClose} visible={isOpen}>
            <h6>{this.state.selectedPlace.name}</h6>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8raktLOI2Kul0MzxrrCMljJgOmmxpndE'
})(MapDemo);