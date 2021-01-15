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
      {
        name: "green monster",
        id: "as",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "ds",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "wq",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "ew",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "re",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "q",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "s",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "green monster",
        id: "b",
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
