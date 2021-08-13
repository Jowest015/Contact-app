import react from "react";
import { connect } from "react-redux";

import {addContact} from './actions';

class AddContactForm extends (react.Component) {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      zipcode: ''
    };

    this.handleInputChange = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(event) {
    const target = event.target;
    const value = target.value;
    const cname = target.cname;
    const email = target.email;
    const phone = target.phone;
    const city= target.city;
    const state= target.state;
    const zipcode= target.zipcode;

    this.setState({
      [cname]: value,
      [email]: value,
      [phone]: value,
      [city]: value,
      [state]: value,
      [zipcode]: value
    });
  }

  handleSubmit(event) {
    if (!this.state.cname && this.state.email && this.state.phone && this.state.city && this.state.state && this.state.zipcode) {
      alert('Error');
    } else {
      this.props.addContact({cname: this.state.cname, email: this.state.email, phone: this.state.phone, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode});
      this.setState();
    alert('New contact was submitted: ');
    event.preventDefault();
    }
  }

  go_back(_event) {
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e) }>
        <label>
          Name:
          <input
            name="cname"
            type="text"
            value={this.state.cname}
            onChange={(e) => this.handleUpdate(e)} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={(e) => this.handleUpdate(e)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={(e) => this.handleUpdate(e)} />
        </label>
        <br />
        <label>
          City:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={(e) => this.handleUpdate(e)} />
        </label>
        <br />
        <label>
          State:
          <input
            name="state"
            type="text"
            value={this.state.state}
            onChange={(e) => this.handleUpdate(e)} />
        </label>
        <br />
        <label>
          Zipcode:
          <input
            name="zipcode"
            type="text"
            value={this.state.zipcode}
            onChange={(e) => this.handleUpdate(e)} />
        </label>
        <button type="submit" value="Submit">Add Contact</button>
        <button type="button" onClick={(e) => this.go_back(e)}>Go Back</button>
      </form>
    );
  }
}


function mapStateToProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return{
    addContact: function (data) {
      dispatch(addContact(data))
    }
  }
}

var ConnectedContacts = connect(mapStateToProps, mapDispatchToProps)(AddContactForm)

export default ConnectedContacts;
