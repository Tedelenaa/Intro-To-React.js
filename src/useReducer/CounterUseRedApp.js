import { useReducer, useState } from "react";
import { countReducer, ACTIONS } from "./reducerFunc";

const initCountValue = {
  count: 0,
  user: "",
};

// const countReducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };

//     case "decrement":
//       return { ...state, count: state.count - 1 };

//     case "reset":
//       return { count: 0 };

//     case "userInput":
//       return { ...state, user: action.payload };

//     default:
//       throw new Error("action does not exist");
//   }
// };

// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
//   RESET: "reset",
//   USER_INPUT: "userInput",
// };

// counter app usestate
export const CounterUseRedApp = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initCountValue);

  //   const addNum = () => {
  //     setCount((prevCount) => {
  //       return prevCount + 1;
  //     });
  //   };

  //   const reduceNum = () => {
  //     setCount((prevCount) => {
  //       return prevCount - 1;
  //     });
  //   };

  //   const reset = () => {
  //     return setCount(0);
  //   };

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <h1>Counter</h1>
      <h3>{state.count}</h3>
      <div className="d-flex mb-5">
        {/* <button className="btn btn-primary me-3" onClick={addNum}>
          Add
        </button> */}
        <button
          className="btn btn-primary me-3"
          //   onClick={() => dispatch({ type: "increment" })}
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        >
          Add
        </button>
        {/* <button className="btn btn-primary me-3" onClick={reduceNum}>
          Remove
        </button> */}
        <button
          className="btn btn-primary me-3"
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        >
          Reduce
        </button>
        {/* <button className="btn btn-primary" onClick={reset}>
          Reset
        </button> */}
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <input
        type="text"
        className="mb-3"
        name="username"
        onChange={(e) =>
          dispatch({ type: "userInput", payload: e.target.value })
        }
      />

      <p>{state.user}</p>
    </div>
  );
};

const initValues = [
  {
    username: "Mariam",
    email: "m@gmail.com",
    age: 1,
  },
];

const dataReducer = (state, action) => {
  switch (action.type) {
    case "addPeople":
      return [...state, action.payload];

    default:
      throw new Error("action does not exist");
  }
};

// counter app usestate
export const DataUseRedApp = () => {
  const initFormValues = {
    username: "",
    email: "",
    age: "",
  };

  //   console.log(initFormValues);

  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(dataReducer, initValues);
  const [peopleData, setPeopleData] = useState(initFormValues);

  //   const addNum = () => {
  //     setCount((prevCount) => {
  //       return prevCount + 1;
  //     });
  //   };

  //   const reduceNum = () => {
  //     setCount((prevCount) => {
  //       return prevCount - 1;
  //     });
  //   };

  //   const reset = () => {
  //     return setCount(0);
  //   };

  // onchange handler for our form
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPeopleData({ ...peopleData, [name]: value });
  };

  // submit form function (onSubmit or onClick)
  const addContact = (e) => {
    e.preventDefault();

    let person = {
      id: Date.now(),
      username: peopleData.username,
      email: peopleData.email,
      age: peopleData.age,
    };

    setPeopleData({ ...peopleData, peopleData: " " });

    dispatch({ type: "addPeople", payload: person });
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={addContact}
      >
        <div>
          <label htmlFor="">Username: </label>
          <input
            type="text"
            className="mb-3"
            name="username"
            value={peopleData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            className="mb-3"
            name="email"
            value={peopleData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="">Age: </label>
          <input
            type="text"
            name="age"
            value={peopleData.age}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success mt-3">Add</button>
      </form>

      {/* <p>{state.user}</p> */}

      <div>
        {state.map((singlePerson) => {
          const { id, username, email, age } = singlePerson;
          return (
            <div className="d-flex align-items-center" key={id}>
              <h2 className="me-3">{username}</h2>
              {/* {console.log(username)} */}
              <h4 className="me-3">{email}</h4>
              <h6>{age}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};
