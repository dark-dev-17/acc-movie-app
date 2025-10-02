import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";

interface Movie {
  id: number;
  Name: string;
  Description: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: 1,
      Name: "Human Condition II, The (Ningen no joken II)",
      Description: "Complete set to brew coffee with different methods.",
    },
    {
      id: 2,
      Name: "House Party 3",
      Description: "Everyday flats that combine comfort and style.",
    },
    {
      id: 3,
      Name: "In Like Flint",
      Description: "A flavorful sauce made with coconut milk and spices.",
    },
    {
      id: 4,
      Name: "World According to Sesame Street, The",
      Description: "Nutty flavor perfect for pesto and salads.",
    },
    {
      id: 5,
      Name: "Big Pun: The Legacy",
      Description: "Advanced wristband that tracks daily activities and sleep.",
    },
  ]);

  const [filter, setFilter] = useState<string>("");

  return (
    <Container fixed>
      <Stack>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Peliculas
            </Typography>
            <Button color="inherit">Mis Peliculas</Button>
          </Toolbar>
        </AppBar>
        <Divider></Divider>
        <Typography variant="h3" component="h2" sx={{ mt: 5 }}>
          Catalogo de Peliculas
        </Typography>
        <TextField
          sx={{ mt: 3 }}
          id="outlined-controlled"
          label="Filtro de busqueda"
          value={filter}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilter(event.target.value);
          }}
        />
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {movies
            .filter((movie) => {
              return movie.Name.toLocaleLowerCase()
                .trim()
                .includes(filter.toLocaleLowerCase().trim());
            })
            .map((movie) => {
              return (
                <Grid size={3}>
                  <Card sx={{ maxWidth: 345 }} key={`key${movie.id}_`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {movie.Name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {movie.Description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        <div></div>
      </Stack>
    </Container>
  );
}

export default App;
