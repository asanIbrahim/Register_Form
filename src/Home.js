import React from 'react'

function Home() {
const userFirstName = localStorage.getItem("FirstName")
const userLastName = localStorage.getItem("LastName")

const handleDelete = ()=> {
  localStorage.clear()
  window.location.reload()
}

const handleLogout = ()=> {
  localStorage.removeItem("signIn")
  window.location.reload()
}
  return (
    <div className='container'>
      Welcome {userFirstName} {userLastName} !
      <button onClick={handleDelete}>Delete</button>
      <button  onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home