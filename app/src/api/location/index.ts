import gql from 'graphql-tag'

const INSERT_LOCATION = gql`
  mutation location($location: location_insert_input!) {
    location: insert_location_one(object: $location) {
      id
      name
      geolocation
      created_at
      updated_at
    }
  }
`

const GET_NEARBY_LOCATIONS = gql`
  query nearbyLocations($distance: Float!, $point: geography!) {
    locations: location(
      where: {
        geolocation: { _st_d_within: { distance: $distance, from: $point } }
      }
    ) {
      id
      name
      geolocation
      created_at
      updated_at
    }
  }
`

export default {
  INSERT_LOCATION,
  GET_NEARBY_LOCATIONS
}
