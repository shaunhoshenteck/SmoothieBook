// import React from "react";

// const useStateWithLocalStorage = (localStorageKey) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem(localStorageKey) || ""
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, JSON.stringify(value));
//   }, [value]);

//   return [value, setValue];
// };

// const LocalStorage = () => {
//   let testObject = {
//     name: "test",
//     time: "Date 2017-02-03T08:38:04.449Z",
//     smoothie: [{ a: "a", b: "b" }],
//   };
//   localStorage.setItem("testObject", JSON.stringify(testObject));
//   let retrievedObject = localStorage.getItem("testObject");
//   const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage");

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Hello React with Local Storage!</h1>

//       <input value={value} type="text" onChange={onChange} />

//       <p>{retrievedObject}</p>
//       <p>{value}</p>
//     </div>
//   );
// };

// export default LocalStorage;
