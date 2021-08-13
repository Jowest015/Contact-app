import deepcopy from "deepcopy";

var initialState = {
  contact_list: [
    {name: "John", 
    email: "jMack@google.com", 
    phone: "346-314-5689", 
    city: "Houston", 
    state: "Texas", 
    zipcode: "77389" }
  ]
};

function clist_red (state, action) {
  if (state === undefined) {
    return initialState;
  }

  console.log(action);
  let new_state = deepcopy(state);
  if (action.type === 'ADD_CONTACT') {
    new_state.contact_list.push({
      name: action.data.name,
      email: action.data.email,
      phone: action.data.phone,
      city: action.data.city,
      state: action.data.state,
      zipcode: action.data.zipcode
    });
  }
  
  return new_state;
}



export default clist_red;