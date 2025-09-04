import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <Form></Form>
    </>
  );
}

function ButtonAbi({ text }) {
  return (
    <Stack>
      <Button>Merhaba</Button>
      <Button>Merhaba</Button>
      <Button>Merhaba</Button>
    </Stack>
  );
}

export default App;
