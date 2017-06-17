import React, {Component} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { getList} from "../actions/getList";
import ChevronRight from 'react-icons/lib/fa/chevron-right';


const recentUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const allTimesUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

class Table extends Component {

  generateList() {
    return this.props.users.data.map(function(user, index){
      return (
        <tr
          onClick={()=> window.open(`https://www.freecodecamp.com/${user.username}`)}
          key={user.username}>
          <td>{index+1}</td>
          <td><img src={user.img}/><p>{user.username}</p></td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });
  }

  componentDidMount() {
    this.props.getList(allTimesUrl);
  }


  render() {
    return (
      <div className="table">
        <table>
          <caption>Leaderboard</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th
                onClick={()=>{
                  this.props.getList(recentUrl);
                  $(".chevron1").addClass("rotate");
                  $(".chevron2").removeClass("rotate");
                }}
                ><ChevronRight className="chevron1"/>Last 30 Days</th>
              <th
                onClick={()=>{
                  this.props.getList(allTimesUrl);
                  $(".chevron2").addClass("rotate");
                  $(".chevron1").removeClass("rotate");
                }}
                ><ChevronRight className="chevron2 rotate"/>All Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users? this.generateList() : "" }
          </tbody>
        </table>
        {this.props.users? "" : <div className="loading"><div className="circle"></div></div> }
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
