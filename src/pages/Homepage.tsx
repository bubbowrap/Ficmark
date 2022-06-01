import { Grid, Typography, Button, Box, AlertTitle } from '@mui/material';
import AnnouncementBar from 'components/AnnouncementBar';
import theme from 'styles/theme';
import { styled } from '@mui/material/styles';

import PlusIcon from '@mui/icons-material/Add';

const ContentBlock = styled(Box)`
  border-radius: 10px;
  background: #262b33;
  padding: 16px;
`;

const WhiteButton = styled(Button)`
  border-radius: 36px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-transform: inherit;
  border: 2px solid white;

  &:hover {
    color: ${theme.palette.primary.main};
    background: rgba(255, 255, 255, 0.85);
    border: 2px solid white;
  }
`;

const Homepage = () => {
  return (
    <>
      <AnnouncementBar>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <AlertTitle sx={{ fontSize: '26px', fontWeight: '600', mb: 0 }}>
              Welcome to Ficmark
            </AlertTitle>
            <Typography>
              Ficmark was created to save your most used AO3 tags and filters.
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'right' }}>
            <WhiteButton variant='outlined' startIcon={<PlusIcon />}>
              Add Your First FicMark
            </WhiteButton>
          </Grid>
        </Grid>
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
