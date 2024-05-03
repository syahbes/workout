import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { Card, InputAdornment, ListItemButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = (props) => {
  const { persons, setPersons } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [personsArray, setPersonsArray] = useState([...props.personsArray]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = personsArray.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addPerson = (person) => () => {
    setPersons([...persons, person]);

    setPersonsArray(personsArray.filter((p) => p.id !== person.id));
  };

  return (
    <Card sx={{ p: 3, gap: 3, display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" gutterBottom>
        Fitness Tracker
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <TextField
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Typography variant="body1" gutterBottom>
        Click to add to the workout
      </Typography>
      <List>
        {filteredPersons.map((person) => (
          <ListItemButton
            key={person.id}
            onClick={addPerson(person)}
            sx={{ cursor: "pointer", textDecoration: "none", color: "black" }}>
            <ListItemText primary={person.name} />
          </ListItemButton>
        ))}
      </List>
    </Card>
  );
};

export default Home;
