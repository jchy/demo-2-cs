import "./styles.css";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  border: 1px solid red;

  h1 {
    color: blue;
    font-size: 20px;
  }

  h2 {
    color: red;
    @media all and (max-width: 620px) {
      color: red;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  font-size: 24px;
  color: ${(props) => (props.color === "aqua" ? "aqua" : "red")};
`;

const types = {
  disabled: "lightgray",
  primary: "aqua",
  secondary: "blue"
};

const Button = styled.button`
  color: white;
  background: palevioletred;
  background: ${(props) =>
    !types[props.type] ? "palevioletred" : types[props.type]};
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;

export default function App() {
  return (
    <>
      <Wrapper className="App">
        <A color="aqua" href="https://www.google.com">
          Goto Google.com
        </A>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Wrapper>
      <Button>Submit</Button>
      <Button type="disabled">RESET</Button>
      <Button type="primary">CHECK</Button>
      <Button type="secondary">UPDATE</Button>
    </>
  );
}
