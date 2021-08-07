var initialState = {
  contact_list: [
    {name: "John", email: "jMack@google.com", phone: "346-314-5689", city: "Houston", state: "Texas", zipcode: "77389" }
  ]
};

function clist_red (state, action) {
  if (state === undefined) {
    return initialState;
  }
  console.log(action);
  
  return state;
}



export default clist_red;