import React from 'react';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];

function search(props) {
  console.log(props);
}

class Contracts extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {date: new Date()};
    this.state = {
      contacts,
      
    };    
  }

  render() {
    return (
      this.state.contacts.map((contact, index) => {
        return (
        <div className="contact-people" key={index}>
          <div className="contact-people__name">
            { contact.firstName + " " + contact.lastName + this.props.contacts.firstName }
          </div>
          <div className="contact-people__description">
            <div className="contact-people__phone">
              <a href="tel:{ contact.phone }">{ contact.phone }</a>
            </div>
            <div className="contact-people__gender">
             { contact.gender }
            </div>
          </div>
        </div>
        )
      })
    )
  }
}

export default Contracts;
