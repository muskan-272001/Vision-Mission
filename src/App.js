// import "./App.css";
// import axios from "axios";
// import Card from "./Components/Card";
// import Header from "./Components/Header";
// import Sidebar from "./Components/Sidebar";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [entities, setEntities] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://entities-alpha.vercel.app/entity_details")
//       .then((response) => setEntities(response.data.slice(0, 16))) // Select first 16 entities
//       .catch((error) => setError(error));
//   }, []);

//   return (
//     <div className="app">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         {error ? (
//           <div>Error: {error.message}</div>
//         ) : (
//           <div className="cards-container">
//             {entities.map((entity, index) => (
//               <Card key={index} name={entity.name} snippet={entity.snippet} />
//             ))}
//           </div>
//         )}
//         <button className="next-button">Next</button>
//       </div>
//     </div>
//   );
// };

// export default App;

import "./App.css";
import axios from "axios";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import React, { useEffect, useState } from "react";

const App = () => {
  const [entities, setEntities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://entities-alpha.vercel.app/entity_details")
      .then((response) => setEntities(response.data.slice(0, 16))) // Select first 16 entities
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="cards-container">
            {entities.map((entity, index) => (
              <Card key={index} name={entity.name} snippet={entity.snippet} />
            ))}
          </div>
        )}
        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default App;
