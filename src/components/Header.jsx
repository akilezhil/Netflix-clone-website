import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <img src="./images/logo.png" className='logo'/>
            <div>
                <select name="" id="">Language
                    <option value="english">English</option>
                    <option value="english">English</option>
                </select>
                <button>Sign In</button>

            </div>
        </nav>
        <div className="header-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form className='email-signup'>
                <input type="email" placeholder='Email address' required/>
                <button type='submit'>Get Started</button>
            </form>
        </div>

    </div>
  )
}

export default Header