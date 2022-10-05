import { Button, Alert, Breadcrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Card className="mb-4">
        <Card.Img src="https://picsum.photos/id/237/400/50" />
        <Card.Body>
          <Card.Title>Card Example</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deserunt quo commodi consequatur corporis quae, neque accusamus
            voluptas delectus, aliquam saepe impedit, sit sequi. Id accusamus
            fugit maxime quas sit
          </Card.Text>
          <Button variant="secondary">Primary</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="success">This is a button</Alert>
      <Button>Hello</Button>
    </div>
  );
}

export default App;
