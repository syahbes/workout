import { Route, Routes } from "react-router-dom";
import Person from "./components/Person";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { useState } from "react";

const MOC_PERSONS = [
  {
    name: "Dana",
    id: 1234,
  },
  {
    name: "Sarit",
    id: 2444,
  },
  {
    name: "Mika",
    id: 312421,
  },
  {
    name: "Tal",
    id: 41243,
  },
  {
    name: "Matan",
    id: 5123,
  },
];

const App = () => {
  const [persons, setPersons] = useState([]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        background:
          "linear-gradient(to right, white 0%, lightBlue 50%, gray 100%)",
      }}
    >
      <Sidebar persons={persons} setPersons={setPersons} />
      <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                persons={persons}
                setPersons={setPersons}
                personsArray={MOC_PERSONS}
              />
            }
          />
          <Route
            exact
            path="/person/:id"
            element={<Person personsArray={MOC_PERSONS} />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
