import {
    Box,
    Container, Paper, 
} from '@mui/material';
import { Header } from './components/Header';
import {
    useEffect, useRef, useState, 
} from 'react';
import { Author } from './components/Author';
import { City } from './enums/city';
import { FloatingMenu } from './components/FloatingMenu';
import { CityBlock } from './components/CityBlock';

export function App() {
    const [selectedCity, setSelectedCity] = useState<City>();
    const [visibleCity, setVisibleCity] = useState<City>();
    const cities = Object.values(City);

    const courtRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const city = entry.target.getAttribute('data-city');
                        if (city) setVisibleCity(city as City);
                        break;
                    }
                }
            },
            { threshold: 0.1 },
        );

        Object.values(courtRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (selectedCity) {
            const el = courtRefs.current[selectedCity];
            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start', 
                });
            }
        }
    }, [selectedCity]);
  
    return (
        <Paper
            sx={{
                width: '100vw',
                height: '100vh',
                overflowY: 'scroll',
                backgroundColor: '#808873', 
            }}
        >
            <Container sx={{ paddingBottom: '60px' }}>
                <Box sx={{ mb: 5 }}>
                    <Header />
                </Box>

                {cities.map((c) => (
                    <Box
                        key={c}
                        ref={(el) => courtRefs.current[c] = el}
                        data-city={c}
                        sx={{ mb: 15 }}
                    >
                        <CityBlock city={c} />
                    </Box>   
                ))}
            </Container>

            <Author />

            <FloatingMenu
                activeCity={visibleCity}
                onSelect={(city) => setSelectedCity(city)}
            />
        </Paper>
    );
}

