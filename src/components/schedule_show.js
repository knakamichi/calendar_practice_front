import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchSchedule, deleteSchedule} from '../actions';

class SchedulesShow extends Component {
  componentDidMount() {
    // if (!this.props.schedule) {
    //   const { id } = this.props.match.params;
    //   this.props.fetchSchedule(id);
    // }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deleteSchedule(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {schedule} = this.props;

    if (!schedule) {
      return <div>Loading... </div>;
    }

    return (
      <div>
        <Link to="/">一覧に戻る</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick = {this.onDeleteClick.bind(this)}
          >
        消去
        </button>
        <h3>{schedule.title}</h3>
        <p>{schedule.date}</p>
        <p>{schedule.time}</p>
        <p>{schedule.place}</p>
        <p>{schedule.importance}</p>
      </div>
    );
  }
}

function mapStateToProps( {schedules}, ownProps ) {
  return {schedule: schedules[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {deleteSchedule})(SchedulesShow);
