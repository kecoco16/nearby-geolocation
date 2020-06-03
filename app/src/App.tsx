import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useMutation } from '@apollo/react-hooks'

import { MapSelectLocation, MapShowLocations } from 'components'
import { locationApi } from 'api'
import { locationSchema } from 'schemas'
import { LocationMutation, LocationMutationVariables } from 'generated/graphql'
import './App.css'

const { initialValues, schema } = locationSchema.insert

function App(): JSX.Element {
  const [insertLocation, { loading, error }] = useMutation<
    LocationMutation,
    LocationMutationVariables
  >(locationApi.INSERT_LOCATION)

  return (
    <div className='container'>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values =>
          insertLocation({
            variables: {
              location: {
                name: values.name,
                geolocation: {
                  type: 'Point',
                  coordinates: [
                    values.geolocation.longitude,
                    values.geolocation.latitude
                  ]
                }
              }
            }
          })
        }
      >
        {({ errors, touched, setFieldValue }) => {
          return (
            <Form className='content'>
              <h1>Insert Location</h1>

              <label>
                Name <Field name='name' />
              </label>
              {Boolean(touched.name && errors.name) && (
                <span className='error'>{errors.name}</span>
              )}

              <MapSelectLocation
                onGeolocationChange={geolocation =>
                  setFieldValue('geolocation', geolocation)
                }
              />

              {Boolean(errors.geolocation) && (
                <pre className='error'>
                  {JSON.stringify(errors.geolocation, null, 2)}
                </pre>
              )}

              {Boolean(error) && (
                <span className='error'>
                  {error?.graphQLErrors.map(({ message }) => message)}
                </span>
              )}

              <button
                className='submit-button'
                type='submit'
                disabled={loading}
              >
                Submit
              </button>
            </Form>
          )
        }}
      </Formik>

      <div className='content'>
        <h1>Show Locations</h1>
        <MapShowLocations />
      </div>
    </div>
  )
}

export default App
