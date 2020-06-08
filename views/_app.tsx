// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@material-ui/styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CssBaseline from '@material-ui/core/CssBaseline';
import createMyTheme from '../lib/theme';

const theme = createMyTheme({});

const App = (props: any) => {
  const { children, ...rest } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const PageComponent = children;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageComponent {...rest} />
    </ThemeProvider>
  );
};

export default App;