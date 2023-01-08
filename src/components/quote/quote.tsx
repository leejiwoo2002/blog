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
  borderLeft: '3px solid',
  borderColor: colors.green[400],
  paddingLeft: '10px'
}));



