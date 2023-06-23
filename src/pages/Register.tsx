import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

// error handling 

const handleError = async (response: Response) => {
    if(!response.ok) {
       const {message} = await response.json()
       throw Error (message)
    }
}



function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isValueMissing, setIsValueMissing] = useState(false)
    const navigate = useNavigate()


    console.log(isError)
    // firing a post req to register endpoint

    const register = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!username || !password) {
            setIsValueMissing(true)
            return
        }

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
      
    // utilizing the error function and handling route to the todolist if user is unique
        .then(handleError)
        .then(() => {
            navigate('/TodoList')
        })
        .catch(() => {
            setIsError(true)
        })
    }

  return (
    <div>
        <h1>Register Here</h1>
        {isError && <h2 style={{color: 'red'}}>User already exist</h2>}
        {isValueMissing && <h2 style={{color: 'red'}}>Enter a username and password</h2>}
        <form className='form' onSubmit={register}>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br/>
            <button type='submit'>Register</button>
            <br/>
            <Link to="/Welcome">Back</Link>
        </form>
    </div>
  )
}

export default Register