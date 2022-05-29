import React, { ReactEventHandler } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { WelcomeIcon } from 'components/SVGIcons';

interface AnnoucementProps {
  title?: string;
  children?: React.ReactNode;
}

const AnnouncementBar: React.FC<AnnoucementProps> = ({ title, children }) => {
  return (
    <Alert
      variant='filled'
      severity='info'
      onClose={() => {}}
      sx={{
        background: 'linear-gradient(90deg, #2839BD 0.08%, #4D29C1 100%);',
        fontSize: '16px',
      }}
      iconMapping={{
        info: <WelcomeIcon />,
      }}
    >
      <AlertTitle sx={{ fontSize: '26px', fontWeight: '600', mb: 0 }}>
        {title}
      </AlertTitle>
      {children}
    </Alert>
  );
};

export default AnnouncementBar;
