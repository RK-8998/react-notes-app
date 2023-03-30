import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup, CardHeader } from "@mui/material";

// const bull = (
//   <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
//     •
//   </Box>
// );

const Note = () => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Note 1
        </Typography>
        <Typography variant="p" sx={{ mb: 1.5, mt: 1.5 }}>
          The @mui/icons-material package depends on @mui/material, which requires Emotion packages. If you don't use
          Material UI in your project yet, install the icons package with:
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>SAVE</Button>
          <Button>DELETE</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default Note;
