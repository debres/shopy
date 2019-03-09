import React from 'react';

import mail from '../../Img/mail.ico';
import phone from '../../Img/phone.ico';
import facebook from '../../Img/facebook.svg';
import twitter from '../../Img/twitter.svg';
import google from '../../Img/google_+.svg';
import instegram from '../../Img/instegram.svg';

const contactInfo = () => {
  return (<div className="smallHeader">
              <div className="contscts">
                <img src={mail} alt="mail" />
                <span>info@shopy.com</span>
                <img src={phone} alt="phone" />
                <span>996 - 5553 - 453</span>
              </div>
              <div className="socials">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={google} alt="google" />
                <img src={instegram} alt="instagram" />
              </div>
         </div>);
}

export default contactInfo;
