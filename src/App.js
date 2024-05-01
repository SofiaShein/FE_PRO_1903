import './App.css';
import Currencies from "./components/Currencies";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className='bg-white p-3'>
      <Currencies />
    </Container>
  );
}

export default App;
