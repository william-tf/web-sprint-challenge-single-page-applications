import React from 'react'
import * as yup from 'yup'

 export default yup.object().shape({
    name: yup.string().required('You must enter a name').min(2, 'Name needs at least two characters'),
    size: yup.string().oneOf(['1', '2', '3', '4']),
    pepperoni:yup.boolean().oneOf([true, false]),
    bacon: yup.boolean().oneOf([true, false]),
    olives: yup.boolean().oneOf([true, false]),
    pineapple: yup.boolean().oneOf([true, false]),
    instructions: yup.string()
  
  })

  