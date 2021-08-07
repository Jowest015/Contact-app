import react from 'react';
import { connect } from 'react-redux';

class ContactList extends (react.Component) {
  render() {
    return (
      <div>
        <ul>
          {this.props.contact_list.map((contact, index) => {
            return <li key= {index}>{contact.name}</li>

          })}
        </ul>
      </div>
    )
  }
}

function MapStateToProps (state) {
  return {contact_list: state.contact_list};
}

var ConnectedContacts = connect(MapStateToProps)(ContactList);

export default ConnectedContacts;