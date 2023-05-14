import { TodoList } from "./components/TodoList";
import styled from "styled-components";
import BackgroundImage from "./assets/bg.jpg";

const AppContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  min-height: 100vh;
`;

export const App = () => {
  return (
    <AppContainer className="App">
      <TodoList/>
    </AppContainer>
  );
}