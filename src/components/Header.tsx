import {
    Box,
    Stack, Typography, 
} from '@mui/material';

export function Header() {
    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                sx={{ py: 5 }}
            >
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center', 
                    }}
                >
                    <Typography
                        variant="h1"
                        color="#ffffff"
                        letterSpacing={1}
                        sx={{
                            fontSize: '1.7rem',
                            marginBottom: '10px', 
                            fontWeight: 700,
                        }}
                    >
                      壁球場地預約連結在哪裡？
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center', 
                    }}
                >
                    <Typography
                        variant="h2"
                        color="#ffffff"
                        sx={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                        }}
                    >
                      Where Are Squash Court Reservation Links?
                    </Typography>
                </Box>
            </Stack>
        </>
    );
}