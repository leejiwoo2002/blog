import React, {ReactNode} from 'react';
import {colors, styled} from '@mui/material';

interface StrongProps {
  children: ReactNode;
}

const Quote = ({children}: StrongProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default Quote;

const Container = styled('div')(() => ({
  borderLeft: '4px solid',
  borderColor: colors.green[400],
  backgroundColor: 'rgb(0, 150, 0, 0.1)',
  paddingLeft: '20px',
  paddingTop: '1px',
  paddingBottom: '1px'
}));



