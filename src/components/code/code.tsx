import React, { ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeProps {
  children: ReactNode;
}

const Code = ({ children }: CodeProps) => {
  return (
    <SyntaxHighlighter language="typescript" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
