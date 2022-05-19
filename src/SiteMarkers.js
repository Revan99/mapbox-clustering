import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';

function SiteMarker({ longitude, latitude, borderColor }) {
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <div
       style={{
          borderRadius:'50%',
          width:'0.5rem',
          height:'0.5rem',
          background:'white',
          border:`0.3rem solid ${borderColor}`
      }} />
    </Marker> 
  );
}

SiteMarker.propTypes = {
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
};

export default SiteMarker;
