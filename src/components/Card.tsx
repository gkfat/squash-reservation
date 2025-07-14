import type { Court } from '../types/court';
import {
    Card as MuiCard, type CardProps, styled,
    Typography,
    Link,
    Box,
    Stack, 
} from '@mui/material';

const StyledCard = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    width: '100%',
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    borderRadius: '10px',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: { maxWidth: '360px' },
    boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...(theme.palette.mode === 'dark' && {
        boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

function WebLink(link: string) {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: '100%' }}
            >
                <Typography>網路預約 | Web Reservation</Typography>
                <Link
                    href={link}
                    target="_blank"
                    underline="hover"
                >
                    連結 | Link
                </Link>
            </Stack>
        </>
    );
}

function ReservationPhone(phone: string) {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: '100%' }}
            >
                <Typography>電話預約 | Tel</Typography>
                <Link underline="hover">
                    {phone}
                </Link>
            </Stack>
        </>
    );
}

interface Props {
    court: Court;
    extendProps?: CardProps;
}

export function Card(props: Props) {
    const {
        city, title, address, link, phone,
    } = props.court;

    return (
        <StyledCard {...props.extendProps}>
            <Typography variant="subtitle2">
                {city}
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
                {address}
            </Typography>

            <Box
                component="iframe"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`}
                width="100%"
                height="200"
                style={{
                    border: 0,
                    height: 240, 
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            <Box>
                {phone && ReservationPhone(phone)}
                {link && WebLink(link)}
                {(!link && !phone) && <Typography>無有效預約方式</Typography>}
            </Box>
        </StyledCard>
    );
}