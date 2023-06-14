
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/authSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
const dispatch = useDispatch()
const {user} = useSelector((state)=> state.auth)
const navigate = useNavigate()
console.log(user);

const handleLogout = () =>{
dispatch(clearUser())
navigate("/login")

}
  return (
        <div className='d-flex justify-content-between'>
            <h1>New Ramazan</h1>
            {user?.email && user?.password ? <Button onClick={handleLogout}>logout</Button> : <Button>login</Button>}
        </div>
    
  )
}

export default Navbar