import { Container } from "./components/Container";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Search } from "./components/Search";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";
import { SavingStatus } from "./components/SavingsStatus";

import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <Search />
        <div>
          <Typography variant="h1">Olá, Felipe!</Typography>
          <Typography variant="p">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <Card>
          <Card.Header>Orçamento diário disponível:</Card.Header>
          <Card.Body>
            <DailyBudget value={200} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Progresso da meta financeira</Card.Header>
          <Card.Body>
            <SavingStatus percent={40}/>
          </Card.Body>
        </Card>
      </Main>
    </Container>
  );
}

export default App;
