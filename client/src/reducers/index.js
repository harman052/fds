export default (state = {}, action) => {
  switch (action.type) {
    case "ASSIGN_PARCEL":
      return state.map(parcel =>
        parcel.id === action.id
          ? { ...parcel, assignee: action.assignee, orderStatus: "assigned" }
          : parcel
      );
    case "PICK_PARCEL":
      return state.map(parcel =>
        parcel.id === action.id
          ? { ...parcel, pickupTime: action.pickupTime, orderStatus: "picked" }
          : parcel
      );
    case "DELIVER_PARCEL":
      return state.map(parcel =>
        parcel.id === action.id
          ? {
              ...parcel,
              deliveryTime: action.deliveryTime,
              orderStatus: "delivered"
            }
          : parcel
      );
    default:
      return state;
  }
};
