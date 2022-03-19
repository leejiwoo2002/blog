import React, { ReactNode } from 'react';
import { styled, colors } from '@mui/material';

interface StrongProps {
  children: ReactNode;
}

const Strong = ({ children }: StrongProps) => {
  return <Container>{children}</Container>;
};

export default Strong;

const Container = styled('strong')(() => ({
  color: colors.green[400],
}));
