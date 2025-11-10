import React from "react";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";

function App() {
  return (
    <div>
      {/* Top App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">🚀 MUI Components Demo</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "30px" }}>
        {/* Buttons */}
        <Typography variant="h5" gutterBottom>
          Buttons
        </Typography>
        <Button variant="contained" color="primary" startIcon={<Add />}>
          Add
        </Button>{" "}
        <Button variant="outlined" color="secondary" startIcon={<Edit />}>
          Edit
        </Button>{" "}
        <Button variant="contained" color="error" startIcon={<Delete />}>
          Delete
        </Button>

        {/* TextField */}
        <Typography variant="h5" gutterBottom style={{ marginTop: "30px" }}>
          Input Field
        </Typography>
        <TextField label="Enter your name" variant="outlined" fullWidth />

        {/* Cards with Grid */}
        <Typography variant="h5" gutterBottom style={{ marginTop: "30px" }}>
          Cards with Grid Layout
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Card 1</Typography>
                <Typography color="textSecondary">
                  This is a simple MUI Card.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Card 2</Typography>
                <Typography color="textSecondary">
                  Cards can hold content and actions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Card 3</Typography>
                <Typography color="textSecondary">
                  MUI is great for UI design!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
