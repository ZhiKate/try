import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {Icon} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Contact() {
  return (
    <div className='content_body'>
        <h1>Contact Page</h1>

        <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body Text 1</Typography>
      <Typography variant="body2">Body Text 2</Typography>
      <Typography variant="button">Button Text</Typography>
      <Typography variant="caption">Caption Text</Typography>
      <Typography variant="overline">Overline Text</Typography>
    </div>

    <div>
      {/* 显示图片 */}
      <Avatar alt="User Avatar" src="/path/to/image.jpg" />

      {/* 显示文字 */}
      <Avatar>U</Avatar>

      {/* 显示图标 */}
      <Avatar>
        <Icon />
      </Avatar>
    </div>

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>Header</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Content</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Sidebar</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>Footer</Paper>
      </Grid>
    </Grid>
    </div>
  );
}

export default Contact;