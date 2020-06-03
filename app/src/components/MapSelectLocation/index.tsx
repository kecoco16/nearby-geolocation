import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

import { mapboxConfig } from 'config'
import MapMarker from '../MapMarker'
import './index.css'

interface MapSelectLocationProps {
  onGeolocationChange(latlog: { longitude: number; latitude: number }): void
  initialGeoLocation?: { longitude: number; latitude: number }
  initialZoom?: number
  props?: Record<string, unknown>
}

function MapSelectLocation({
  onGeolocationChange,
  initialGeoLocation = mapboxConfig.initialValues.geoLocation,
  initialZoom = mapboxConfig.initialValues.zoom,
  ...props
}: MapSelectLocationProps): JSX.Element {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const currentMarker = useRef<mapboxgl.Marker | null>(null)

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

    map.on('click', ({ lngLat }) => {
      const { lng, lat } = lngLat

      currentMarker?.current?.remove()

      const markerNode = document.createElement('div')
      ReactDOM.render(<MapMarker />, markerNode)

      const market = new mapboxgl.Marker(markerNode)
      market.setLngLat([lng, lat]).addTo(map)

      currentMarker.current = market

      onGeolocationChange({ longitude: lng, latitude: lat })
    })

    return () => map.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapContainerRef} className='select-location' {...props} />
}

export default MapSelectLocation
