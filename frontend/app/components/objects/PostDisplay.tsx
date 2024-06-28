import React from 'react';
import { Box, FormControl, InputAdornment, MenuItem, Modal, TextField, Typography, Button, Card, 
  CardActionArea, CardActions, CardContent, CardMedia, Rating, CardHeader, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// First need to fetch the username, user's streak and
// the base64 image encoding before calling this
const PostDisplay = ({ posterUserName, posterUserImage, posterUserStreak, imagePostedByUser, setReactionModalOpen} : any) => {
  return (
    <Card>
      <CardHeader
        avatar={posterUserImage}
        title={posterUserName}
        subheader={`Streak is ${posterUserStreak}`}
        action={
					<IconButton onClick={() => {setReactionModalOpen(true);}}>
						<AddIcon 
            />
					</IconButton>
				}
      />
      <CardMedia image = {imagePostedByUser} sx={{height: 0, paddingTop: '100%'}} />
    </Card>
  );
}

export default PostDisplay;