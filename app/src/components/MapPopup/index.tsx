import React from 'react'

interface MapPopupProps {
  name: string
}

function MapPopup({ name }: MapPopupProps): JSX.Element {
  return <div>{name}</div>
}

export default MapPopup
