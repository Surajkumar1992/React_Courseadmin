import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";



class CoursesPage extends Component {
    state = {
            course: {
                title: ""
            }
        };

    changeHandler = (event) => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course));
    };

    

    render() {
        return (
          <form>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input
              type="text"
              onChange={this.changeHandler}
              value={this.state.course.title}
              onSubmit={this.submitHandler}
            />
            <input type="submit" value="Save" onClick={this.submitHandler} />
            {/* {this.props.courses.map(course => (
              <div key={course.title}>{course.title}</div>
            ))} */}
          </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
            courses: state.courses
        };
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(CoursesPage);