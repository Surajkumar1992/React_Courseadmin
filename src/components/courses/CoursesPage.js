import React, { Component } from "react";


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

    submitHandler = event => {
        event.preventDefault();
        alert(this.state.course.title);
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
            <input type="submit" value="Save" onClick={this.submitHandler}/>
          </form>
        );
    }
}

export default CoursesPage;