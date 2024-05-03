// Sidebar.jsx
import React, { useState } from "react";
import {
  Box,
  List,
  ListItemText,
  TextField,
  IconButton,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { persons, setPersons } = props;

  const [newPerson, setNewPerson] = useState("");

  const handleAddPerson = () => {
    if (newPerson.trim()) {
      setPersons([...persons, { name: newPerson.trim(), id: Date.now() }]);
      setNewPerson("");
    }
  };

  const handleRemovePerson = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  return (
    <Box sx={{ width: 250, borderRight: "1px solid gray", padding: 2, height: "100vh", overflowY: "auto" }}>
      <ListItemButton component={Link} to="/" sx={{ justifyContent: "center" , backgroundColor: "lightBlue", borderRadius: "10px" }} >
        <ListItemText primary="Home" />
        <HomeIcon />
      </ListItemButton>
      <List>
        {persons.map((person) => (
          <ListItemButton
            key={person.id}
            component={Link}
            to={`/person/${person.id}`}>
            <ListItemText primary={person.name} />
            <IconButton onClick={() => handleRemovePerson(person.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
