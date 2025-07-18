import {
    Chip,
    Stack, 
} from '@mui/material';
import { City } from '../enums/city';

interface Props {
    activeCity?: City;
    onSelect: (city: City) => void;
}

export function FloatingMenu(props: Props) {
    const {
        activeCity, onSelect, 
    } = props;

    return (
        <Stack
            position="fixed"
            top="50%"
            right="-20px"
            spacing={1}
            sx={{
                transform: 'translateY(-50%)',
                zIndex: 10,
            }}
        >
            {Object.values(City).map((city) => (
                <Chip
                    key={city}
                    label={city}
                    onClick={() => onSelect(city)}
                    sx={{
                        px: 3,
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.2s',
                        color: '#fff',
                        fontWeight: 'bold',
                        backgroundColor: activeCity === city ? '#FF9800' : '#FFC107',
                        transform: activeCity === city ? 'scale(1.1)' : 'scale(1)',
                        '&:hover': { backgroundColor: activeCity === city ? '#FB8C00' : '#eab30e' },
                    }}
                />
            ))}
        </Stack>
    );
}