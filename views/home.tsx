import {
  makeStyles,
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Link,
  Card,
  CardContent,
  Theme,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
      minWidth: 275,
      maxWidth: 575,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 50,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
    marginRight: 10
  },
}))(Button);

interface IndexProps {
  user: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginServices = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Welcome! Please log in with
      </Typography>
        <ColorButton variant="contained" color="primary" href="/auth/login/google">Google</ColorButton>
        <ColorButton variant="contained" color="primary" href="/auth/login/facebook">Facebook</ColorButton>
      </CardContent>
    </Card>
  );
}

const Index = ({ user }: IndexProps) => {
  return (
    <div>
      {user
        ? <Typography variant="h4" gutterBottom>Hello, {user.name}. View your <Link href="/profile">profile</Link></Typography> :
        <LoginServices />
      }
    </div>
  );
};

export default Index;