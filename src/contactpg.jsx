import react from 'react';
import { connect } from 'react-redux';

class ContactList extends (react.Component) {
  
  addContact(event) {
    this.props.history.push('/add')

  }

  render() {
    return (
      <div>
        <ul>
          {this.props.contact_list.map((contact, index) => 
          <li key= {index}>
            {contact.name},
            {contact.email},
            {contact.state},
            {contact.city},
            {contact.zipcode}
          </li>
          )}
          <button type="button" onClick={(e) => this.addContact(e)}>Add Contact</button>
        </ul>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {contact_list: state.contact_list};
}

function mapDispatchToProps (dispatch) {
  return {};
}

var ConnectedContacts = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ConnectedContacts;