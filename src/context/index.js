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
        name: "red monster",
        id: "as",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "blue monster",
        id: "ds",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "aaa monster",
        id: "wq",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "sss monster",
        id: "ew",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "ccc monster",
        id: "re",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "bbb monster",
        id: "q",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "ee monster",
        id: "s",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
      {
        name: "ww monster",
        id: "b",
        description: "yummy",
        ingredients: ["1 cup milk", "1 cup cilantro"],
      },
    ],
  };

  deleteSmoothieHandler = (id) => {
    const filtered = this.state.smoothies.filter((obj) => {
      return obj.id !== id;
    });
    // console.log(filtered);
    this.setState({ smoothies: filtered });
  };

  addSmoothieHandler = (smoothie) => {
    const newArr = this.state.smoothies;
    newArr.push(smoothie);
    this.setState({ smoothies: newArr });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          deleteSmoothie: this.deleteSmoothieHandler,
          addSmoothie: this.addSmoothieHandler,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
