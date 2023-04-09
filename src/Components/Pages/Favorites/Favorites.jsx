import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

const FavoritesContainer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      {state.favs.map((e) => (
        <Card sx={{ maxWidth: 345 }} key={e.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/dnqfh2chg/image/upload/v1680834957/doctor_mpg4ix.jpg"
              alt="dentist"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" key={e.id}>
                {e.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default FavoritesContainer;
