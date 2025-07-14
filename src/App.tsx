import {
    Container, Stack, 
} from '@mui/material';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { COURTS } from './data/courts';
import { SearchBar } from './components/SearchBar';
import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    const courts = COURTS.filter((court) => {
        return court.address.includes(text)
          || court.city.includes(text)
          || court.title.includes(text);
    });

    const onSearchChange = (v: string) => {
        setText(v);
    };
  
    return (
        <>
            <Container
                sx={{
                    width: '100vw',
                    height: '100vh',
                    overflowY: 'scroll',
                    backgroundColor: '#808873', 
                    paddingBottom: '60px',
                }}
            >
                <Header />

                <SearchBar onChange={onSearchChange} />

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                >
                    {courts.map((court) => <Card court={court} />)}
                </Stack>
            </Container>
        </>
    );
}

export default App;
