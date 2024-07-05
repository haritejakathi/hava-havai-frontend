import React, { Component } from 'react';
import { Provider, defaultTheme, Button, TextField } from '@adobe/react-spectrum';
import './App.css';

class App extends Component {
  state = {
    mockDB: [],
    inputData: ''
  };

  handleInputChange = (value) => {
    this.setState({ inputData: value });
  };

  handleAddData = () => {
    this.setState((prevState) => ({
      mockDB: [...prevState.mockDB, prevState.inputData],
      inputData: ''
    }));
  };

  handleDeleteData = (index) => {
    this.setState((prevState) => ({
      mockDB: prevState.mockDB.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <Provider theme={defaultTheme}>
        <div className="App">
          <h1>Hava Havai Frontend Assignment</h1>
          <TextField
            label="Input Data"
            value={this.state.inputData}
            onChange={this.handleInputChange}
          />
          <Button variant="cta" onPress={this.handleAddData}>
            Add Data
          </Button>
          <ul>
            {this.state.mockDB.map((data, index) => (
              <li key={index}>
                {data}
                <Button variant="secondary" onPress={() => this.handleDeleteData(index)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Provider>
    );
  }
}

export default App;
