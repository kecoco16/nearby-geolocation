import * as Yup from 'yup'

const initialValues = {
  name: '',
  geolocation: {
    longitude: '',
    latitude: ''
  }
}

const schema = Yup.object({
  name: Yup.string().required(),
  geolocation: Yup.object({
    longitude: Yup.number().required(),
    latitude: Yup.number().required()
  }).required()
})

export default {
  initialValues,
  schema
}
