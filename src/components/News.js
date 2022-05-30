import React, { useState } from 'react'

import './News.css'

const News = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div className='BlackI'>
            <h1 className="News">NEWSLETTER</h1>
            <h2 className='Updates'>Be the first to get updates.</h2>
            <form>
            <input
                className='FN'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
            />
            <input
                className='LN'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last name"
                type="text"
                name="lastName"
                required
            />
            <input
                className='EM'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
                type="email"
                name="email"
                required
            />
            <button className = 'Sign' type="submit">Sign Up</button>
            </form>    
        </div>
    )
}

export default News
