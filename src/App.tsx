import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Osca } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/status';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { IsLoggedIn } from './components/state/loggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';

function App() {
  const personName = {
    first: 'Nien Ying',
    last: 'Hung'
  }

  const nameList = [
    {
      first: 'Nien Ying',
      last: 'Hung'
    },
    {
      first: 'Noom',
      last: 'Nim'
    },
    {
      first: 'Nien Noom',
      last: 'Ying Nim'
    }
  ]

  return (
    <div className="App">
      {/* <IsLoggedIn/> */}
      <User/>
      <Greet 
        name="nienying" 
        messageCount={10}
        isLoggedIn={false}
      />
      <Person
        name={personName}
      />
      <PersonList 
        names={nameList}
      />

      <Status status="loading" />
      <Heading>Test Cildren Text</Heading>
      <Osca>
        <Heading>Test Pass Component Cildren Text</Heading>
      </Osca>
      <Greet 
        name="nienying" 
        isLoggedIn={false}
      />
      <Button handleClick={ (event, id) => { console.log('hello', event, id) }} />
      <Input value="" handleChenge={ (event) => { console.log(event) }} />
      <Container styles={{ border: '1px dashed red', padding: '10px', width: 'fit-content'}} ></Container>
      <Counter/>
    </div>
  );
}

export default App;
