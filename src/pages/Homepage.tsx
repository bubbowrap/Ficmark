import { Grid, Typography, Box } from '@mui/material';
import AnnouncementBar from 'components/AnnouncementBar';
import theme from 'styles/theme';
import { styled } from '@mui/material/styles';

const ContentBlock = styled(Box)`
  border-radius: 10px;
  background: #262b33;
  padding: 16px;
`;

const Homepage = () => {
  return (
    <>
      <AnnouncementBar title='Welcome to Ficmark.'>
        Ficmark was created to save your most used AO3 tags and filters.
      </AnnouncementBar>
      <Typography component='h1' variant='h2'>
        <Box sx={{ m: '24px 0' }}>Your Favorites</Box>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <ContentBlock>
            <Typography component='h2' variant='h3'>
              Recently Updated FicMarks
            </Typography>
          </ContentBlock>
        </Grid>
        <Grid item xs={4}>
          <ContentBlock>
            <Typography component='h2' variant='h3'>
              Recently Updated Authors
            </Typography>
          </ContentBlock>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
