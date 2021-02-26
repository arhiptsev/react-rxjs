import React from 'react';
import './App.css';
import styled from 'styled-components';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { userObservable, StateProvider } from './common/state';
import { Header } from './components/Header';
import { random } from 'lodash';
import { Main } from './components/Main';
import { Search } from './components/Search';

const GridHeader = styled.div` 
  grid-area: header;
  margin-bottom: 20px;
`;
const GridMain = styled.div` 
  grid-area: main;
`;

const GridSidebar = styled.div` 
  grid-area: sidebar;
`;
const GridFooter = styled.div` 
  grid-area: footer;
`;

const Grid = styled.div<any>`
width: 1200px;
margin: 0 auto;
display: grid;
  grid-template-columns: 300px 300px 300px 300px ;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header'
    'sidebar main main main '
    'footer footer footer footer';
`;


// Эмитируем сокет, который регулярно присылает нам инфу о пользователе.
const socket = interval(2000)
  .pipe(
    map(() => ({
      username: 'Test User',
      age: 25,
      notifications: random(1, 30),
      messages: random(1, 30),
    }))
  );



socket.subscribe(data => userObservable.next(data));



function App() {
  return (
    
    <StateProvider>
      <Grid>
        <GridHeader>
          <Header />
        </GridHeader>
        <GridSidebar>
          <Search />
        </GridSidebar>
        <GridMain>
          <Main />
        </GridMain>
        <GridFooter></GridFooter>
      </Grid>
    </StateProvider>
  );
}

export default App;
