import ParcelColumns from "../components/ParcelColumns";
import { connect } from "react-redux";
import { pickParcel } from "../actions";
import { deliverParcel } from "../actions";

const mapStateToProps = (state, ownProps) => ({
  state: state.filter(parcel => parcel.assignee === ownProps.userName),
  status: ownProps.status,
  userName: ownProps.userName,
  userRole: ownProps.userRole
});

const mapDispatchToProps = dispatch => ({
  pickParcel: parcelId => dispatch(pickParcel(parcelId)),
  deliverParcel: parcelId => dispatch(deliverParcel(parcelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParcelColumns);
