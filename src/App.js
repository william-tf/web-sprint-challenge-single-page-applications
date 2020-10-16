import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom'
import Form from './components/Form'
import Pizza from './components/Pizza'
import HomePage from './components/homePage'
import * as yup from 'yup'
import axios from 'axios'
import schema from './schema'



const initialOrdersArray= []


const blankOrder = {
  size: '',
  name: '',
  instructions: '',
  pepperoni: false,
  bacon: false,
  olives: false,
  pineapple: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  instructions: '',
}

const App = () => {
const [form, setForm] = useState(blankOrder)
const [orders, setOrders] = useState(initialOrdersArray)
const [errors, setErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(true)


const setFormErrors = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => setErrors({...errors, [name]: ''}))
  .catch((err) => {
    setErrors({...errors, [name]: err.errors[0]})
  })
}

useEffect(() => {
  schema.isValid(form).then((valid) => setDisabled(!valid))
}, [form])


const onChange = evt => {
  const {name, value, type, checked} = evt.target;
  const valueToUse = type === 'checkbox' ? checked: value;
  setFormErrors(name, valueToUse)
  setForm({...form, [name]: valueToUse})
}



  const onSubmit = evt =>{
    evt.preventDefault()
    const newOrder = {name: form.name.trim(), size: form.size.trim(), instructions: form.instructions.trim()}
    axios.post('https://reqres.in/api/users', newOrder)
    .then(res => {
      setOrders([...orders, res.data])
      setForm({size: '', name: '', instructions: '', pepperoni: false, bacon: false, olives: false, pineapple: false})
      })
      .catch(err => {
        debugger;
    })
}


  return (
    <div>
      <Link to='/'>
      <button>Home</button>
      </Link>
      <Route path='/form'>
      <Form values={form} disabled={disabled} change={onChange} submit={onSubmit}></Form>
      </Route>
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Route path="/pizza">
        <Pizza/>
      </Route>
    </div>
  );
};
export default App;
