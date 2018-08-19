import React, {Component} from "react";
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSchedules} from '../actions';

class Calendar extends Component {

  componentDidMount() {
    this.props.fetchSchedules();
  }

  renderSchedule(){
    return _.map(this.props.schedules, schedule => {
      return (
        <li className="list-group-item" key={schedule.id}>
          <p>{schedule.name_of_event}</p>
        </li>
      );
    });
  }

  render() {
    console.log(this.props.schedules);
    return(
      <div>
        <ul className="list-group">
          {this.renderSchedule}
        </ul>
      </div>
    );
  }
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({fetchSchedules}, dispatch);
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default connect(mapStateToProps, mapDispatchtoProps)(Calendar);


// connect(null, mapDispatchtoProps)

// import dateFns from "date-fns";
//
// class Calendar extends Component {
//
//     // currently displayed month (new Date() from date-fns)
//     state = {
//       currentMonth: new Date(),
//       selectedDate: new Date()
//     };
//
// // Month, Year, month selector の表示
//     renderHeader() {
//       const dateFormat = "MMMM YYYY";
//
//       return (
//         <div className="header row flex-middle">
//           <div className="col col-start">
//             <div className="icon" onClick={this.prevMonth}>
//               chevron_left
//             </div>
//           </div>
//           <div className="col col-center">
//             <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
//           </div>
//           <div className="col col-end" onClick={this.nextMonth}>
//             <div className="icon">chevron_right</div>
//           </div>
//         </div>
//       );
//     }
//
// // day,  の表示
//     renderDays() {
//       const dateFormat = "dddd";
//       const days = [];
//
//       let startDate = dateFns.startOfWeek(this.state.currentMonth);
//
//       for (let i = 0; i < 7; i++) {
//         days.push(
//           <div className="col col-center" key={i}>
//             {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
//           </div>
//         );
//       }
//
//       return <div className="days row">{days}</div>;
//     }
//
// //
//     renderCells() {
//       const { currentMonth, selectedDate } = this.state;
//       const monthStart = dateFns.startOfMonth(currentMonth);
//       const monthEnd = dateFns.endOfMonth(monthStart);
//       const startDate = dateFns.startOfWeek(monthStart);
//       const endDate = dateFns.endOfWeek(monthEnd);
//
//       const dateFormat = "D";
//       const rows = [];
//
//       let days = [];
//       let day = startDate;
//       let formattedDate = "";
//
//       while (day <= endDate) {
//         for (let i = 0; i < 7; i++) {
//           formattedDate = dateFns.format(day, dateFormat);
//           const cloneDay = day;
//           days.push(
//             <div
//               className={`col cell ${
//                 !dateFns.isSameMonth(day, monthStart)
//                   ? "disabled"
//                   : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
//               }`}
//               key={day}
//               onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
//             >
//               <span className="number">{formattedDate}</span>
//               <span className="bg">{formattedDate}</span>
//             </div>
//           );
//           day = dateFns.addDays(day, 1);
//         }
//         rows.push(
//           <div className="row" key={day}>
//             {days}
//           </div>
//         );
//         days = [];
//       }
//       return <div className="body">{rows}</div>;
//     }
//
// // deals with cell click (change date selector)
//     onDateClick = day => {
//       this.setState({
//         selectedDate: day
//       });
//     };
//
// // deals when right arrow is clicked in header
//     nextMonth = () => {
//       this.setState({
//         currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
//       });
//     };
//
// // deals when left arrow is clicked in header
//     prevMonth = () => {
//       this.setState({
//         currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
//       });
//     };
//
//     render() {
//       return (
//         <div className="calendar">
//           {this.renderHeader()}
//           {this.renderDays()}
//           {this.renderCells()}
//         </div>
//       );
//     }
//   }

// export default Calendar;
