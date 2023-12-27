export default function reducer(state, action) {
  if (action.type === "upd-state") {
    const { name, value } = action.payload;
    
    return { ...state, [name]: { value } };
  }
  return state;
}
