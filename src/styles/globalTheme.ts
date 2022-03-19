import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `Noto Sans KR, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #212121;
          color: #F5F5F5;
        }
        a {
           color: #F5F5F5;
        }
      `,
    },
  },
});

export default theme;
