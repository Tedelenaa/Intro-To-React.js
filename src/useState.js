import { useState } from "react";
import { bankDBs, PersonData, ProductData } from "./data";

// export const UpdateUser = () => {
//   const [username, setUsername] = useState("John");

//   //   const changeName = () => {
//   //     setUsername("Esther");
//   //   };

//   const changeName = () => {
//     if (username === "John") {
//       setUsername("Esther");
//     } else {
//       setUsername("John");
//     }
//   };

//   return (
//     <section className="d-flex flex-column align-items-center mt-5">
//       <h2>Update Name</h2>
//       <h3>{username}</h3>

//       {/* the function below is written as inline  */}
//       {/* <button
//         className="btn btn-success"
//         onClick={() => {
//           setUsername("Esther");
//         }}
//       > */}

//       {/* the function has been written outside */}
//       <button className="btn btn-success" onClick={changeName}>
//         Update Name
//       </button>
//     </section>
//   );
// };

export const UpdateUser = () => {
  const [user, setUser] = useState("John");

  //   console.log(user);
  //   console.log(setUser);

  const updateUser = () => {
    if (user === "John") {
      setUser("Esther");
    } else {
      setUser("John");
    }
  };

  return (
    <section className="d-flex flex-column align-items-center mt-5">
      <h2>Update Name</h2>
      <h4>{user}</h4>

      {/* <button className="btn btn-success" onClick={() => setUser("Esther")}>
        Update Name
      </button> */}

      <button className="btn btn-success" onClick={updateUser}>
        Update User
      </button>
    </section>
  );
};

// export const CounterApp = () => {
//   const [num, setNum] = useState(0);
//   return (
//     <section className="d-flex flex-column align-items-center mt-5">
//       <h1>My Counter App</h1>

//       <h3>{num}</h3>
//       <button className="btn btn-primary mb-2" onClick={() => setNum(num + 1)}>
//         Add
//       </button>
//       <button className="btn btn-secondary" onClick={() => setNum(num - 1)}>
//         Subtract
//       </button>
//     </section>
//   );
// };

export const CounterApp = () => {
  const [num, setNum] = useState(10);

  const reduceNum = () => {
    setNum(num - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1>My Counter App</h1>
      <h3>{num}</h3>

      <div className="d-flex">
        <button
          className="btn btn-primary me-3"
          onClick={() => setNum(num + 1)}
        >
          Add
        </button>

        <button className="btn btn-secondary" onClick={reduceNum}>
          Subtract
        </button>
      </div>
    </div>
  );
};

// export const PeopleData = () => {
//   const [data, setData] = useState(PersonData);

//   const removeData = (id) => {
//     let newData = data.filter((singlePerson) => {
//       return singlePerson.id !== id;
//     });

//     setData(newData);

//     // setData(data.filter((singlePerson) => singlePerson.id !== id));
//   };

//   return (
//     <section className="d-flex flex-column align-items-center mt-5">
//       <h1>List of People</h1>

//       <ul>
//         {data.map((person) => {
//           //   console.log(bank);
//           const { id, username } = person;
//           //   const { id, bankName } = bank;
//           return (
//             <>
//               <li key={id}>{username}</li>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => {
//                   removeData(id);
//                 }}
//               >
//                 Delete
//               </button>
//             </>
//           );
//         })}

//         <button
//           className="btn btn-warning mt-3"
//           onClick={() => {
//             setData([]);
//           }}
//         >
//           Clear All
//         </button>
//       </ul>
//     </section>
//   );
// };

export const PeopleData = () => {
  const [users, setUsers] = useState(PersonData);
  //   console.log(users);
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1>Users</h1>

      <ul className="list-item">
        {users.map((user) => {
          const { id, username } = user;
          //   return <li key={user.id}>{user.username}</li>;
          // })}
          return <li key={id}>{username}</li>;
        })}
      </ul>
    </div>
  );
};

export const ProductList = () => {
  let [products, setProducts] = useState(ProductData);

  let removeProduct = (id) => {
    let newProduct = products.filter((Singleproduct) => {
      return Singleproduct.id !== id;
    });

    setProducts(newProduct);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h1>Products</h1>

      <ul>
        {products.map((product) => {
          const { id, productname } = product;
          return (
            <li key={id} className="mt-3">
              {productname}
              <button
                className="btn btn-danger ms-3"
                onClick={() => removeProduct(id)}
              >
                Delete
              </button>
            </li>
          );
        })}

        <button
          className="btn btn-warning mt-3"
          onClick={() => setProducts([])}
        >
          Clear All
        </button>
      </ul>
    </div>
  );
};
