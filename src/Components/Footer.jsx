import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div>

        <img src="https://stanzaliving.collegedunia.com/images/logo.svg" alt="" />
        <p>© 2023 Collegedunia Web Pvt. Ltd. All Rights Reserved</p>
        </div>
        <div className="social">
            <p>Follow Us</p>
            <div>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
            </div>
        </div>

    </footer>
  )
}

export default Footer