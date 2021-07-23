import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT
});

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'Title', headerName: 'Title', width: 130 },
  { field: 'Description', headerName: 'Description', width: 130 },
];

export default class App extends React.Component {
  
  httpClient = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT
  });

  state = {
    tasks: []
  };

  componentDidMount() {
    httpClient.get('/Tasks')
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

  render() {

    return (
      <div style={{ height: 400, width: '100%' }}>
        <Card>
          <CardContent>
            Title
            <hr />
            Description
            <hr />
            Status
            <hr />
          </CardContent>
          <CardActions>
            <Button startIcon={<CheckCircleOutlineIcon/>} size="small">Finish task</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}