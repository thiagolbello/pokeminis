import { createTheme } from '@mui/material/styles';
import { blue, grey, teal } from '@mui/material/colors'

const pkTheme = createTheme({
    palette: {
      c1: {
        // Purple and green play nicely together.
        main: blue[100]
      },
      c2: {
        // This is green.A700 as hex.
        main: teal[400]
      },
      c3: { //
          main: blue[800]
      },
      c4: {
          main: teal[800]
      },
      c5: {
          main: grey[50]
      },
      c6: {
          main: grey[900]
      }
    },
  });

  export default pkTheme;