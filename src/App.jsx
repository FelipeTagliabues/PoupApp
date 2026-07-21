import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Search } from "./components/Search";


function App() {
  return (
    <Container>
      <Aside/>
      <Main>
        <Search/>
      </Main>
    </Container>
  );
}

export default App;
