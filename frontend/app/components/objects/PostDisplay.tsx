import React from 'react';
import { Box, FormControl, InputAdornment, MenuItem, Modal, TextField, Typography, Button, Card, 
  CardActionArea, CardActions, CardContent, CardMedia, Rating, CardHeader, IconButton 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'

// Fetch the username, user's streak and
// the base64 image encoding before calling this
const PostDisplay = ({ posterUserName, posterUserImage, posterUserStreak, imagePostedByUser, setReactionModalOpen} : any) => {
  return (
    <Card>
      <CardHeader
        avatar={posterUserImage}
        title={posterUserName}
        subheader={`Streak is ${posterUserStreak}`}
        sx={{height: '5%'}}
      />
      <div>
        <CardMedia component='img' image = {imagePostedByUser}
        sx={{height: '100%', width: '100%', objectFit:'contain'}} />
      </div>
    </Card>
  );
}

export default PostDisplay;