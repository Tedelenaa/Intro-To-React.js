import React from "react";
// import heroImg from "./images/homepage_images/hero_image.png";
// import Logo from "./images/Logo.svg";
import { bankDBs } from "./data";
import Guest from "./Navbar";

const App = () => {
  return (
    <React.Fragment>
      <h1>Hey React!!!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, non?
      </p>
      <Guest />
      {/* <Navbar></Navbar> */}
      {/* <CardComponent /> */}
      <CardLogic />
    </React.Fragment>
  );
};

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Navbar
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Link
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled">Disabled</a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const CardLogic = () => {
//   return (
//     <div className="container m-3">
//       <div className="row">
//         <div className="col-md-3">
//           <CardComponent streetNum={20} streetName="Ketu" city="Lagos" />
//         </div>
//         <div className="col-md-3">
//           <CardComponent streetNum={30} streetName="Ikosi" city="Kogi" />
//         </div>
//         <div className="col-md-3">
//           <CardComponent streetNum={50} streetName="Festac" city="Abuja" />
//         </div>
//         <div className="col-md-3">
//           <CardComponent />
//         </div>
//       </div>
//     </div>
//   );
// };

// iteration for card logic
const CardLogic = () => {
  return (
    <div className="container m-3">
      {/* <div className="row">
        <div className="col-md-3">
          <CardComponent streetNum={20} streetName="Ketu" city="Lagos" />
        </div>
        <div className="col-md-3">
          <CardComponent streetNum={30} streetName="Ikosi" city="Kogi" />
        </div>
        <div className="col-md-3">
          <CardComponent streetNum={50} streetName="Festac" city="Abuja" />
        </div>
        <div className="col-md-3">
          <CardComponent />
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          {bankDBs.map((bank) => {
            return (
              <div className="col-md-4" key={bank.id}>
                <CardComponent {...bank} />
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          {bankDBs.map((bank) => {
            if (bank.bankName === "kuda") {
              return "";
            } else {
              return (
                <div className="col-md-4">
                  <CardComponent {...bank} />
                </div>
              );
            }
          })}
        </div>
      </div> */}
    </div>
  );
};

// function CardComponent(props) {
//   var person = "Tunde";
//   return (
//     //     <div className="card" style={{
//     //   width: "18rem",
//     //   marginLeft: `5rem`,
//     //   marginTop: "5rem"
//     // }}>
//     // <div className="card" style={cardStyle}>
//     <div className="card cardStyle">
//       <img src={heroImg} alt="hero img" />
//       <div className="card-body">
//         <h5 className="card-title">{person.toUpperCase()}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{props.streetNum}</h6>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <a href="#" className="card-link">
//           {props.streetName}
//         </a>
//         <a href="#" className="card-link">
//           {props.city}
//         </a>
//       </div>
//     </div>
//   );
// }

// function CardComponent({ streetNum, streetName, city }) {
//   var person = "Tunde";
//   return (
//     //     <div className="card" style={{
//     //   width: "18rem",
//     //   marginLeft: `5rem`,
//     //   marginTop: "5rem"
//     // }}>
//     // <div className="card" style={cardStyle}>
//     <div className="card cardStyle">
//       <img src={heroImg} alt="hero img" />
//       <div className="card-body">
//         <h5 className="card-title">{person.toUpperCase()}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{streetNum}</h6>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <a href="#" className="card-link">
//           {streetName}
//         </a>
//         <a href="#" className="card-link">
//           {city}
//         </a>
//       </div>
//     </div>
//   );
// }

// function CardComponent(props) {
//   const { streetNum, streetName, city } = props;
//   var person = "Tunde";
//   return (
//     //     <div className="card" style={{
//     //   width: "18rem",
//     //   marginLeft: `5rem`,
//     //   marginTop: "5rem"
//     // }}>
//     // <div className="card" style={cardStyle}>
//     <div className="card cardStyle">
//       <img src={heroImg} alt="hero img" />
//       <div className="card-body">
//         <h5 className="card-title">{person.toUpperCase()}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{streetNum}</h6>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//         <a href="#" className="card-link">
//           {streetName}
//         </a>
//         <a href="#" className="card-link">
//           {city}
//         </a>
//       </div>
//     </div>
//   );
// }

// iterating over data
// const bankDBs = [
//   {
//     id: 1,
//     img: heroImg,
//     bankName: "kuda",
//     branch: "ikeja",
//     streetNum: 30,
//   },
//   {
//     id: 2,
//     img: Logo,
//     bankName: "barter",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 3,
//     img: heroImg,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 4,
//     img: heroImg,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 5,
//     img: heroImg,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 6,
//     img: heroImg,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 7,
//     img: heroImg,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
//   {
//     id: 8,
//     img: heroImg,
//     bankName: "carbon",
//     branch: "mile 12",
//     streetNum: 28,
//   },
// ];

function CardComponent(props) {
  const { img, bankName, branch, streetNum } = props;
  var person = "Tunde";
  return (
    //     <div className="card" style={{
    //   width: "18rem",
    //   marginLeft: `5rem`,
    //   marginTop: "5rem"
    // }}>
    // <div className="card" style={cardStyle}>
    <div className="card cardStyle">
      <img src={img} alt="hero img" />
      <div className="card-body">
        <h5 className="card-title">{person.toUpperCase()}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{bankName}</h6>
        <p className="card-text">
          {streetNum} <span>{branch}</span>
        </p>
      </div>
    </div>
  );
}

// const cardStyle = {
//   width: "18rem",
//   marginLeft: `5rem`,
//   marginTop: "5rem",
// };

export default App;
