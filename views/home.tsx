interface IndexProps {
  user: any;
}

const Index = ({ user }: IndexProps) => {
  return (
    <div>
      {user
        ? <p>Hello, {user.name}. View your <a href="/profile">profile</a>.</p> :
        <p>Welcome! Please <a href="/login">log in</a>.</p>}
    </div>
  );
};

export default Index;