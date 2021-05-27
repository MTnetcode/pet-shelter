import React from "react";
import LocationPin from "./LocationPin.js"
import "./contact.css";
import "./map.css";
import {apiKey} from './api-key.js'
import GoogleMapReact from 'google-map-react'
function Contact() {
    const location = {
        address: '4666 Stroher Street, Cityfake, Fakestate',
        lat: 37.42216,
        lng: -122.08427,
      }
  return (
      <div>
          <div className="contact">
              <h3 className="c-heading">Contact</h3>
    <p className="c-paragraph">
    <strong>Email:</strong>  info@dogatas.com <br /> <br />
    <strong>Phone:</strong>  (736)529-3604 <br /> <br />
    <strong>Adress</strong>  <br />
Street: 4666  Strother Street <br />
City: Cityfake <br />
State: Fakestate <br />
Zip Code: 35212
    </p>
    <div className="map">


    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey.key }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
    <p className="bank">If you can’t adopt pet but you still want help, you can bring some food for 
our pets or send some money on our bank account (00000/000)</p>
</div>

          
      </div>
  );
}

export default Contact;