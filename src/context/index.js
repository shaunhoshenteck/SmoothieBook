import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = JSON.parse(localStorage.getItem("smoothie")) || { smoothies: [] };

  componentDidUpdate() {
    let currObj = this.state;
    console.log(JSON.stringify(currObj));
    localStorage.setItem("smoothie", JSON.stringify(currObj));
  }

  // state = {
  //   smoothies: [
  //     {
  //       name: "green monster",
  //       id: "gm",
  //       cardDescription: "This is super yummy",
  //       description:
  //         "YummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyuYummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyu",
  //       ingredients: "",
  //       ingredientsArr: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "red monster",
  //       id: "as",
  //       cardDescription: "This is super yummy",
  //       description:
  //         "YummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyuYummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyu",
  //       ingredients: "",
  //       ingredientsArr: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "blue monster",
  //       id: "ds",
  //       cardDescription: "This is super yummy",
  //       description:
  //         "YummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyuYummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyu",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "aaa monster",
  //       id: "wq",
  //       cardDescription: "This is super yummy",
  //       description:
  //         "YummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyuYummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyummyyu",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "sss monster",
  //       id: "ew",
  //       description: "yummy",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "ccc monster",
  //       id: "re",
  //       description: "yummy",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "bbb monster",
  //       id: "q",
  //       description: "yummy",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "ee monster",
  //       id: "s",
  //       description: "yummy",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //     {
  //       name: "ww monster",
  //       id: "b",
  //       description: "yummy",
  //       ingredients: ["1 cup milk", "1 cup cilantro"],
  //     },
  //   ],
  // };

  addIngredientHandler = (id, val) => {
    const smoothiesIndex = this.state.smoothies.findIndex(
      (smoothie) => smoothie.id === id
    );
    // console.log(smoothiesIndex);
    let newArray = [...this.state.smoothies];
    // console.log(newArray[smoothiesIndex]);
    newArray[smoothiesIndex] = {
      ...newArray[smoothiesIndex],
      ingredientsArr: [...newArray[smoothiesIndex].ingredientsArr, val],
    };
    // console.log(newArray[smoothiesIndex]);
    this.setState({
      smoothies: newArray,
    });
  };

  editDescriptionHandler = (id, val) => {
    const smoothiesIndex = this.state.smoothies.findIndex(
      (smoothie) => smoothie.id === id
    );
    // console.log(smoothiesIndex);
    let newArray = [...this.state.smoothies];
    // console.log(newArray[smoothiesIndex]);
    newArray[smoothiesIndex] = {
      ...newArray[smoothiesIndex],
      description: val,
    };
    // console.log(newArray[smoothiesIndex]);
    this.setState({
      smoothies: newArray,
    });
  };

  editSentenceHandler = (id, val) => {
    const smoothiesIndex = this.state.smoothies.findIndex(
      (smoothie) => smoothie.id === id
    );
    // console.log(smoothiesIndex);
    let newArray = [...this.state.smoothies];
    // console.log(newArray[smoothiesIndex]);
    newArray[smoothiesIndex] = {
      ...newArray[smoothiesIndex],
      cardDescription: val,
    };
    // console.log(newArray[smoothiesIndex]);
    this.setState({
      smoothies: newArray,
    });
  };

  removeIngredientHandler = (id, idx) => {
    const smoothiesIndex = this.state.smoothies.findIndex(
      (smoothie) => smoothie.id === id
    );
    // console.log(smoothiesIndex);
    let newArray = [...this.state.smoothies];
    // console.log(newArray[smoothiesIndex]);
    const copyArr = newArray[smoothiesIndex].ingredientsArr;
    // console.log(copyArr);
    copyArr.splice(idx, 1);
    newArray[smoothiesIndex] = {
      ...newArray[smoothiesIndex],
      ingredientsArr: copyArr,
    };
    // console.log(newArray[smoothiesIndex]);
    this.setState({
      smoothies: newArray,
    });
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
          addIngredient: this.addIngredientHandler,
          deleteIngredient: this.removeIngredientHandler,
          editDescription: this.editDescriptionHandler,
          editSentence: this.editSentenceHandler,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
