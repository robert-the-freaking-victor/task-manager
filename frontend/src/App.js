import React from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT
});

export default class App extends React.Component {
  
  httpClient = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
  });

  state = {
    tasks: [],
    inputTaskName: "",
    inputTaskDescription: "",
  };

  // form submit function
  handleSubmit(event) {
    event.preventDefault();
    // check if the input is filled
    if (this.state.inputTaskName.length > 0 && this.state.inputTaskDescription.length > 0) {
      httpClient.post("/Tasks", {
        Title: this.state.inputTaskName,
        Description: this.state.inputTaskDescription,
        Status: "Pending"
      })
        .then((response) => {
          alert("Item inserted with success!");
          // refresh tasks
          this.getTasks();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("You need to fill all the fields!");
    }
  }

  // get tasks from API
  getTasks() {
    httpClient.get("/Tasks")
      .then((response) => {
        let data = response.data;
        data = data.map((task) => {
          task.id = task._id;
          return task;
        });
        this.setState({ tasks: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteTask(id) {
    httpClient.delete(`/Tasks/${id}`)
      .then(() => {
        alert(`Task ${id} deleted with success!`);
        this.getTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getTasks();
  }

  finishTask(task) {
    console.log(task);
    httpClient.put(`/Tasks/${task.id}`, { Status: "Done" })
      .then((response) => {
        const data = response.data;
        alert(`Task ${data.Title} completed!`);
        this.getTasks();
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderTasks(task) {
    return (
      <Grid item xs={4}>
        <Card style= {{ backgroundColor: task.Status === "Pending" ? "orange" : "white" }}>
        <CardContent>
          {task.Title}
          <hr />
          {task.Description}
          <hr />
          {task.Status}
          <hr />
        </CardContent>
        <CardActions>
           <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={ () => { this.deleteTask(task._id) } }
            >
              Delete task
            </Button>
          <Button
            variant="contained"
            color="primary"
            id={`finish-${task._id}`}
            onClick={ () => { this.finishTask(task) }}
            startIcon={<CheckCircleOutlineIcon/>}>
              Finish task
          </Button>
        </CardActions>
        </Card>
      </Grid>
    );
  }

  render() {
    return (
      <div>
      <Grid container spacing={5} style={{ justifyContent: "center" }}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
          <TextField id="standard-basic" label="Task name" onInput={e => this.setState({inputTaskName: e.target.value})}/>
          <hr />
          <TextField id="filled-basic" label="Description" onInput={e => this.setState({inputTaskDescription: e.target.value})} />
          <hr />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Grid>
        <Grid container spacing={3}>
          {this.state.tasks.map(this.renderTasks.bind(this))}
        </Grid>
      </div>
    );
  }
}