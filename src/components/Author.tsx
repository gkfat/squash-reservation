import {
    Stack, Typography, 
} from '@mui/material';

export function Author() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            sx={{ pb: 2 }}
        >
            <Typography color="#ffffff">
                      Powered by GK
            </Typography>
        </Stack>
    );
}