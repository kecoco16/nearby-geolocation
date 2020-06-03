import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useQuery } from '@apollo/react-hooks'

import { locationApi } from 'api'
import { mapboxConfig } from 'config'
import {
  NearbyLocationsQuery,
  NearbyLocationsQueryVariables
} from 'generated/graphql'
import MapMarker from '../MapMarker'
import MapPopup from '../MapPopup'
import './index.css'

interface MapShowLocationsProps {
  initialGeoLocation?: { longitude: number; latitude: number }
  initialZoom?: number
  distance?: number
  props?: Record<string, unknown>
}

function MapShowLocations({
  initialGeoLocation = mapboxConfig.initialValues.geoLocation,
  initialZoom = mapboxConfig.initialValues.zoom,
  distance = mapboxConfig.initialValues.distance,
  ...props
}: MapShowLocationsProps): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  // useLazyQuery execution function should return a promise
  // https://github.com/apollographql/react-apollo/issues/3499
  // temporary fix here
  // https://github.com/apollographql/react-apollo/issues/3499#issuecomment-586039082
  const { refetch: getNearbyLocations } = useQuery<
    NearbyLocationsQuery,
    NearbyLocationsQueryVariables
  >(locationApi.GET_NEARBY_LOCATIONS, {
    variables: {
      distance,
      point: {
        type: 'Point',
        coordinates: [initialGeoLocation.longitude, initialGeoLocation.latitude]
      }
    },
    skip: true
  })

  useEffect(() => {
    mapboxgl.accessToken = mapboxConfig.accessToken

    const map = new mapboxgl.Map({
      container: mapContainerRef.current || '',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [initialGeoLocation.longitude, initialGeoLocation.latitude],
      zoom: initialZoom
    })

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    )

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    )

    const handleOnMoveendAndLoad = async () => {
      try {
        const { lng, lat } = map.getCenter()

        const { data } = await getNearbyLocations({
          distance,
          point: {
            type: 'Point',
            coordinates: [lng, lat]
          }
        })

        data?.locations?.forEach(location => {
          const {
            name,
            geolocation: { coordinates }
          } = location

          const markerNode = document.createElement('div')
          ReactDOM.render(<MapMarker />, markerNode)

          const popupNode = document.createElement('div')
          ReactDOM.render(<MapPopup name={name} />, popupNode)

          new mapboxgl.Marker(markerNode)
            .setLngLat(coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 15 }).setDOMContent(popupNode)
            )
            .addTo(map)
        })
      } catch (error) {
        console.log('error =========', error)
      }
    }

    map.on('moveend', () => handleOnMoveendAndLoad())

    map.on('load', () => handleOnMoveendAndLoad())

    return () => map.remove()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapContainerRef} className='show-locations' {...props} />
}

export default MapShowLocations
