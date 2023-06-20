import { useState } from 'react'

function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register = (e: any) => {
        e.preventDefault()
        fetch(`http://localhost:4000/register` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
    }

  return (
    <div>
        <h1>Register Here</h1>
        <form className='form' onSubmit={register}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register