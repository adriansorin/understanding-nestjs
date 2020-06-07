interface ProfileProps {
    user: any;
}

const Profile = ({ user }: ProfileProps) => {
    return (
        <div>
            <p>ID: {user.userID}</p>
            <p>Username:  {user.username}</p>
            <p>Name: {user.name}</p>
            { user.email && <p>Email: { user.email }</p>}
        </div>
    );
};

export default Profile;