import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const ActionAreaCard = ({ nombre, imagen, descripcion }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imagen}
            alt={nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  export default ActionAreaCard;