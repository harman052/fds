import { connect } from "react-redux";
import { assignParcel } from "../actions";
import BikerListGroup from "../components/BikerListGroup";

const mapDispatchToProps = dispatch => ({
  assignParcel: (parcelId, assignee) =>
    dispatch(assignParcel(parcelId, assignee))
});

export default connect(
  null,
  mapDispatchToProps
)(BikerListGroup);
