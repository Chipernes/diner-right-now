import useMainContent from './MainContent.hook';

const MainContent = () => {
  const { data, count } = useMainContent();

  return (
    <div>
      <h1>GraphQL Users</h1>
      <ul>
        {data.map((user: { name: string; email: string }, index: number) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
      <p>{count}</p>
    </div>
  );
};

export default MainContent;
