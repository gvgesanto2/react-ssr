import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/user/user.actions';
import UsersListPage from './users-list.component';

const mapStateToProps = state => ({
  users: state.user.usersList
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);