import { useState } from "react";

// example 1:

// export const ReactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");

//   return (
//     <div className="d-flex flex-column align-items-center mt-5 pt-5">
//       <form
//         action=""
//         className="border p-3 d-flex flex-column align-items-center"
//       >
//         <div className="mb-4">
//           <label htmlFor="" className="me-3">
//             Name:
//           </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="" className="me-3">
//             Email:
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="" className="me-3">
//             Age:
//           </label>
//           <input
//             type="email"
//             value={age}
//             onChange={(e) => {
//               setAge(e.target.value);
//             }}
//           />
//         </div>

//         <div className="d-flex justify-content-center">
//           <button className="btn btn-info">Submit</button>
//         </div>
//       </form>

//       <div className="mt-5 d-flex align-items-center border p-3">
//         <h4 className="me-3">{name}</h4>
//         <h5 className="me-3">{email}</h5>
//         <h5>{age}</h5>
//       </div>
//     </div>
//   );
// };

// // example 2:
// export const MultipleInputReactForm = () => {
//   //   const [name, setName] = useState("");
//   //   const [email, setEmail] = useState("");
//   //   const [age, setAge] = useState("");

//   // 1. now, instead of setting up different useStates for the different inputs, we can now set up one state for all the inputs
//   const personData = {
//     name: "",
//     email: "",
//     age: "",
//   };

//   const [person, setPerson] = useState(personData);

//   // 2. we want to set up our handle change
//   const onChangeHandler = (e) => {
//     e.preventDefault();

//     // we want to target two things, the name and value stored in the form
//     let name = e.target.name;
//     let value = e.target.value;

//     // accessing using dynamic object properties
//     setPerson({ ...person, [name]: value });
//   };

//   return (
//     <div className="d-flex flex-column align-items-center mt-5 pt-5">
//       <form
//         action=""
//         className="border p-3 d-flex flex-column align-items-center"
//       >
//         <div className="mb-4">
//           <label htmlFor="" className="me-3">
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={person.name}
//             onChange={onChangeHandler}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="" className="me-3">
//             Email:
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={person.email}
//             onChange={onChangeHandler}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="" className="me-3">
//             Age:
//           </label>
//           <input
//             type="email"
//             name="age"
//             value={person.age}
//             onChange={onChangeHandler}
//           />
//         </div>

//         <div className="d-flex justify-content-center">
//           <button className="btn btn-info">Submit</button>
//         </div>
//       </form>

//       <div className="mt-5 d-flex align-items-center border p-3">
//         <h4 className="me-3">{person.name}</h4>
//         <h5 className="me-3">{person.email}</h5>
//         <h5>{person.age}</h5>
//       </div>
//     </div>
//   );
// };

// example 3:

export const UpdateOnSubmit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };

      setPeople((prevPeople) => {
        return [...prevPeople, person];
      });
    }

    setName("");
    setEmail("");
  };

  let removePerson = (id) => {
    let newPerson = people.filter((Singleperson) => {
      return Singleperson.id !== id;
    });

    setPeople(newPerson);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <form
        action=""
        className="border p-3 d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="" className="me-3">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="me-3">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="d-flex justify-content-center">
          {/* <button className="btn btn-info" onClick={submitForm}> */}
          <button className="btn btn-info">Submit</button>
        </div>
      </form>

      <div className="mt-5 d-flex flex-column align-items-center border p-3">
        {/* <h4 className="me-3">{name}</h4>
        <h5 className="me-3">{email}</h5> */}

        {people.map((person) => {
          const { id, name, email } = person;
          return (
            <div className="mt-2">
              <h4 className="me-3">{name}</h4>
              <h5 className="me-3">{email}</h5>
              <button
                className="btn btn-danger ms-3"
                onClick={() => removePerson(id)}
              >
                Delete
              </button>
            </div>
          );
        })}

        <button className="btn btn-warning mt-3" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </div>
  );
};
