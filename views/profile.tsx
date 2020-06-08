import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Table, Theme, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, Paper, CardContent } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        table: {
            minWidth: 575,
        },
        root: {
            textAlign: 'center',
            paddingTop: theme.spacing(4),
            maxWidth: 875,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
        },
    })
);

interface ProfileProps {
    user: any;
}

const Profile = ({ user }: ProfileProps) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Google ID</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={user.userID}>
                                <TableCell component="th" scope="row">
                                    {user.userID}
                                </TableCell>
                                <TableCell align="right">{user.googleID}</TableCell>
                                <TableCell align="right">{user.username}</TableCell>
                                <TableCell align="right">{user.name}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default Profile;