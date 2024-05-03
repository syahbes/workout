import { Container, Card, Typography } from "@mui/material";
import Exercise from "./Exercise";
import { useParams } from "react-router-dom";
const MOC_DATA = [
  {
    name: "Squat",
  },
  {
    name: "Deadlift",
    target: "Back",
    equipment: "Barbell",
  },
  {
    name: "Hip Thrust",
  },
];

const Person = (props) => {
  const { personsArray } = props;
  const personId = useParams().id;

  const getNameById = (id) => {
    return personsArray.find((person) => person.id == id)?.name || "Unknown";
  };

  return (
    <Card sx={{ p: 3, gap: 2, display: "flex", flexDirection: "column" }} elevation={5}>
      <Typography variant="h4" component="h1">
        {getNameById(personId)}
      </Typography>
      <Typography variant="body1" component="h1">
        ID: {personId}
      </Typography>
      {MOC_DATA.map((exercise) => (
        <Exercise key={exercise.name} name={exercise.name} />
      ))}
    </Card>
  );
};
export default Person;
