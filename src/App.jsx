import LogoPoupApp from "./assets/LogoPoupApp.svg";
import { Container } from "./components/Container";

function App() {
  return (
    <Container>
      <aside>
        <img src={LogoPoupApp} alt="" />
      </aside>
      <h3>Olá Mundo</h3>
    </Container>
  );
}

export default App;
