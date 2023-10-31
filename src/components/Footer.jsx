import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Questions? call 000-000-000-000</h2>
        <div className="row">
            <div className="col">
                <a href="">FAQ</a>
                <a href="">Investor Relations</a>
                <a href="">Privacy</a>
                <a href="">Speed Test</a>
            </div>
            <div className="col">
                <a href="">Help Center</a>
                <a href="">Jobs</a>
                <a href="">Cookies Preferences</a>
                <a href="">Legal Notices</a>
            </div>
            <div className="col">
                <a href="">Account</a>
                <a href="">Ways to watch</a>
                <a href="">Corporate Information</a>
                <a href="">Only on Netflix</a>
            </div>
            <div className="col">
                <a href="">Media Centre</a>
                <a href="">Terms of use</a>
                <a href="">Contact us</a>
            </div>
        </div>
        <select name="" id="">Language
                    <option value="english">English</option>
                    <option value="english">English</option>
                </select>
        <p className="copyright-txt">Netflix India</p>
   </div>
  )
}

export default Footer