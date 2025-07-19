import {
    City, CityLangMapping, 
} from '../enums/city';
import {
    Card as MuiCard,
    styled,
    Typography,
    Button,
    Box,
    Stack,
    CardActions, 
} from '@mui/material';
import type { Court } from '../types/court';

const StyledCard = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    width: '100%',
    height: '100%',
    padding: theme.spacing(3),
    borderRadius: '10px',
    gap: theme.spacing(2),
    boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...(theme.palette.mode === 'dark' && {
        boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

function WebLink(link: string) {
    const openLink = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: '100%' }}
        >
            <Typography>網路預約 | Web Reservation</Typography>
            <Button
                variant="contained"
                onClick={openLink}
                sx={{ textTransform: 'none' }}
            >
                    Link
            </Button>
        </Stack>
    );
}

interface Props {
    city: City;
    court: Court;
}

export function Card(props: Props) {
    const {
        city,
        court: {
            title, address, link, phone,
        },
    } = props;

    return (
        <StyledCard
            sx={{
                p: 2,
                pb: 3, 
            }}
        >
            <Box>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ textDecoration: 'underline' }}
                >
                    {CityLangMapping[city]}
                </Typography>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {phone}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {address}
                </Typography>
            </Box>

            <Box
                component="iframe"
                src={`https://www.google.com/maps?q=${encodeURIComponent(title)}&z=15&output=embed`}
                width="100%"
                height="200"
                style={{
                    border: 0,
                    height: 240, 
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            <CardActions
                sx={{
                    marginTop: 'auto',
                    textAlign: 'right', 
                }}
            >
                <Box sx={{ width: '100%' }}>
                    {link && WebLink(link)}
                    {(!link && phone) && <Typography>電話預約 | Tel Reservation</Typography>}
                    {(!link && !phone) && <Typography>無有效預約方式 | Non Available</Typography>}
                </Box>
            </CardActions>
        </StyledCard>
    );
}