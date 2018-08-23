import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createSchedule} from '../actions';


class ScheduleNew extends Component {
// shows error when tabbed away
  renderField(field) {
    const {meta : {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.labeltoShow}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

// this callback is called after redux form validation
  onSubmit(values){
    this.props.createSchedule(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div>
        <h2>New Schedule</h2>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            labeltoShow="予定の名前"
            name="title"
            component={this.renderField}
          />
          <Field
            labeltoShow="日付"
            name="date"
            component={this.renderField}
          />
          <Field
            labeltoShow="時間"
            name="time"
            component={this.renderField}
          />
          <Field
            labeltoShow="場所"
            name="place"
            component={this.renderField}
          />
          <Field
            labeltoShow="重要度 1 ~ 10 (1が最重要)"
            name="importance"
            component={this.renderField}
          />
          <button type= "submit" className="btn btn-primary">登録</button>
          <Link to="/" className="btn btn-danger">キャンセル</Link>
        </form>
      </div>
    );
  }
}

// redux form validation
function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "予定の名前を記入してください ";
  }
  if (!values.date) {
    errors.date = "日付を記入してください ";
  }
  if (!values.time) {
    errors.time = "時間を記入してください ";
  }
  if (!values.place) {
    errors.place = "時間を記入してください ";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'ScheduleNewForm'
})(
  connect(null, {createSchedule})(ScheduleNew)
);
