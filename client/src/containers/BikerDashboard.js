import BikerDashboardOptions from "../components/BikerDashboardOptions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  state,
  userName: ownProps.userName
});

export default connect(
  mapStateToProps,
  null
)(BikerDashboardOptions);
