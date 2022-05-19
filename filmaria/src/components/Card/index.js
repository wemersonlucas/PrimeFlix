import React, { useState, useEffect } from "react";

//Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

//Paths
import api from "../../services/api";

export default function BasicCard() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: "4f278857399cee26f668bc6b6985b95d",
          language: "PT-BR",
          page: 1,
        },
      });
      console.log(response.data.results);
      setFilmes(response.data.results);
    }

    loadFilmes();
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      flexWrap="wrap"
    >
      {filmes.map((filme) => {
        return (
          <Card key={filme.id} sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
              component="img"
              alt="Filme"
              height="550"
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            />
            <CardContent sx={{ backgroundColor: "#13293d" }}>
              <Typography gutterBottom variant="h5" color="white">
                {filme.title}
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
              >
                <Avatar variant="square" sx={{ backgroundColor: "#021322" }}>
                  <Typography variant="body2" color="white">
                    {filme.vote_average}
                  </Typography>
                </Avatar>
                <Typography variant="body2" color="white" ml={3}>
                  {filme.release_date}
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ backgroundColor: "#021322" }}>
              <Typography variant="body1" color="white">
                <Link
                  underline="none"
                  color="white"
                  href={`/filmes/${filme.id}`}
                >
                  Detalhes
                </Link>
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}