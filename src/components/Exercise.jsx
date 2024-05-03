import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";

const Exercise = (props) => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([
    {
      reps: 15,
      weight: 20,
      note: "פעם ראשונה",
    },
    {
      reps: 17,
      weight: 25,
      note: "יש שיפור",
    },
  ]);

  const handleAddHistory = () => {
    if (reps && weight) {
      setHistory([...history, { reps, weight, note }]);
      setReps("");
      setWeight("");
      setNote("");
    }
  };

  return (
    <Card
      sx={{
        p: 3,
        gap: 2,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
      elevation={5}>
      <Typography variant="h4">{props.name}</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">History</Typography>
        <List>
          {history.map((entry, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Reps: ${entry.reps}, Weight: ${entry.weight}kg`}
              />
              <ListItemText primary={`Note: ${entry.note}`} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
        <TextField
          label="Reps"
          value={reps}
          size="small"
          onChange={(e) => setReps(e.target.value)}
        />
        <TextField
          label="Weight"
          value={weight}
          size="small"
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          label="Note"
          value={note}
          size="small"
          onChange={(e) => setNote(e.target.value)}
        />

        <Button variant="contained" onClick={handleAddHistory}>
          Add
        </Button>
      </Box>
    </Card>
  );
};
export default Exercise;
