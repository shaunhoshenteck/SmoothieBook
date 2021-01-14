import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    smoothies: [
      {
        name: "green monster",
        id: "gm",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
    ],
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
