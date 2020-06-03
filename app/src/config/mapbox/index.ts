const config = {
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '',
  initialValues: {
    geoLocation: { longitude: -84.1132, latitude: 9.9363 },
    zoom: 12.5,
    distance: 5000
  }
}

export default config
