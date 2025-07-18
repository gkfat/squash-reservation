import {
    City, CityLangMapping, 
} from '../enums/city';
import {
    Typography,
    Box,
    Grid, 
} from '@mui/material';
import { Card } from './Card';
import { COURTS } from '../data/courts';

interface Props {
    city: City;
}

export function CityBlock(props: Props) {
    const { city } = props;

    const courts = COURTS[city] ?? [];

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    mb: 5,
                    fontWeight: 'bold',
                    color: '#fff', 
                }}
            >
                {CityLangMapping[city]}
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {courts.map((c) => {
                    return (
                        <Grid
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4,
                            }}
                        >
                            <Card
                                city={city}
                                court={c}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}