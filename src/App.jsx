import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        textMessage: "",
        position: "top left",
        typeNotification: "alert"
      },
       showingAlert: false,
       notifications: []
    };
  }
  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      notifications: [...prevState.notifications, prevState.post],
      post: { textMessage: "", position: "top left", typeNotification: "alert" },
      showingAlert: true
    }));
    setTimeout(() => {
      this.destroyNotifications();
    }, 2500);
  };
  destroyNotifications() {
    this.setState({
      showingAlert: false,
      notifications: []
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Customise your notification:</h1>
        <Form
          handleChange={this.handleChange}
          post={this.state.post}
          handleSubmit={this.handleSubmit}
        />
        <div className="post-container">
            {this.state.notifications.map((notification, index) => (
              <div key={index} className={`${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
                <div className={"notification-wrapper " + notification.position +' '+ notification.typeNotification}>
                  <p className="notification-message">{notification.textMessage}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
