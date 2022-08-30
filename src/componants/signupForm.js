import React from 'react'

function SignupForm() {
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='tittle'> Sign up form </h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full name</label>
                    <input className='input' type='text'  />
                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type='email'  />
                </div>
                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type='password'  />
                </div>
                <div >
                    <button className='submit' >Sign up</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default SignupForm