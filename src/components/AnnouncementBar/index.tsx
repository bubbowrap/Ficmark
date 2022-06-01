import React, { ReactEventHandler } from 'react';
import { Alert } from '@mui/material';
import { WelcomeIcon } from 'components/SVGIcons';

interface AnnoucementProps {
  title?: string;
  children?: React.ReactNode;
}

const AnnouncementBar: React.FC<AnnoucementProps> = ({ children }) => {
  return (
    <Alert
      variant='filled'
      severity='info'
      onClose={() => {}}
      sx={{
        background: 'linear-gradient(90deg, #2839BD 0.08%, #4D29C1 100%);',
        fontSize: '16px',
        borderRadius: '10px',
        '& .MuiAlert-message': {
          flex: 1,
        },
      }}
      iconMapping={{
        info: <WelcomeIcon />,
      }}
    >
      {children}
    </Alert>
  );
};

export default AnnouncementBar;
