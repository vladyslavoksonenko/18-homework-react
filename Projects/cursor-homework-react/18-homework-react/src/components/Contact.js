import React from 'react';
import Contracts from '../components/Contracts';


class Contact extends React.Component {

  render() {
    return (
      <section className="contact">
        <div className="header">
          <div className="header__title">
            Contacts
          </div>
          <div className="header__buttons">
            <input className="header__button" type="button" value="Edit" onClick={function () { alert(true); }}/>
            <input className="header__button" type="button" value="Close" onClick={function () { alert(true); }}/>
          </div>
        </div>
        <div className="search">
          <input type="search" placeholder="Search" className="search__input" onChange="{}"/>
        </div>
        <div className="main"> 
        <Contracts />
        </div>
        <div className="footer-button">
          <input className="footer-button__input" type="button" value="New contact"/>
        </div>
      </section>
    )
  }
}

export default Contact;