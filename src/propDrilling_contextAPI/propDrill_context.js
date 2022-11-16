import { useReducer, useState } from "react";
import { countReducer, ACTIONS } from "./reducerFunc";

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
export const DataUserApp = () => {
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
