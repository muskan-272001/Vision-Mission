// import "./Card.css";
// import React from "react";

// const Card = ({ name, snippet }) => {
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//       <p>{snippet}</p>
//     </div>
//   );
// };

// export default Card;

import "./Card.css";
import React from "react";

const Card = ({ name, snippet }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{snippet}</p>
    </div>
  );
};

export default Card;
