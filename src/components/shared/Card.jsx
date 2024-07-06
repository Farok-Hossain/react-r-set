const Card = ({ user }) => {
  const { name, username, email, id } = user;
  return (
    <div>
      <p>{id}</p>
      <p className="text-red-500">{name}</p>
      <p className="text-green-500">{email}</p>
      <span className="text-blue-600">{username}</span>
    </div>
  );
};

export default Card;
