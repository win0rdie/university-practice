import { Main, Paper, Sidebar } from '../components';

export const App = () => {
  return (
    <div className="app">
      <Sidebar />

      <Main>
        <Paper>Main</Paper>
      </Main>
    </div>
  );
};
