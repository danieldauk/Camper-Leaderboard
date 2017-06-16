import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { getList} from "../actions/getList";


const recentUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const allTimesUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

class Table extends Component {

  generateList() {
    console.log(this.props.users);
    return this.props.users.data.map(function(user, index){
      return (
        <tr key={user.username}>
          <td>{index+1}</td>
          <td><img style={{height: 100}}src={user.img}/>{user.username}</td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>Leaderboard</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th
              onClick={()=>this.props.getList(recentUrl)}
              >Last 30 Days</th>
            <th
              onClick={()=>this.props.getList(allTimesUrl)}
              >All Time</th>
          </tr>
            {this.generateList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getList: getList}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Table);
