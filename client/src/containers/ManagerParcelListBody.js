import ParcelColumns from "../components/ParcelColumns";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  state,
  status: ownProps.status,
  userName: ownProps.userName,
  userRole: ownProps.userRole
});

export default connect(
  mapStateToProps,
  null
)(ParcelColumns);
