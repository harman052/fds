import moment from "moment";

export const assignParcel = (id, assignee) => ({
  type: "ASSIGN_PARCEL",
  id,
  assignee
});

export const pickParcel = id => ({
  type: "PICK_PARCEL",
  id,
  pickupTime: moment(new Date()).format("MMM/DD/YYYY HH:mm")
});

export const deliverParcel = id => ({
  type: "DELIVER_PARCEL",
  id,
  deliveryTime: moment(new Date()).format("MM/DD/YYYY HH:mm")
});
