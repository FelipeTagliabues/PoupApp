import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import { Typography } from "./components/Typography";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <Search />
        <div>
          <Typography variant="h1">Olá, Felipe!</Typography>
          <Typography variant="p">Veja como estão suas finanças hoje.</Typography>
        </div>
      </Main>
    </Container>
  );
}

export default App;
