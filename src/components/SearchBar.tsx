import {
    Box, TextField,
} from '@mui/material';
import {
    useEffect, useState, 
} from 'react';

interface SearchBarProps {
    onChange: (text: string) => void;
}

export function SearchBar(props: SearchBarProps) {
    const { onChange } = props;
    const [text, setText] = useState('');

    useEffect(() => {
        onChange(text);
    }, [text, onChange]);

    return (
        <>
            <Box sx={{ marginBottom: '15px' }}>
                <TextField
                    fullWidth
                    variant="standard"
                    placeholder="搜尋 | Enter to search"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    sx={{
                        py: 1,
                        px: 3,
                        borderRadius: '15px',
                        backgroundColor: '#ffffff',
                        '& .MuiInputBase-root:before': { borderBottom: 'none' },
                        '& .MuiInputBase-root:after': { borderBottom: 'none' },
                        '& .MuiInputBase-root:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                    }}
                />
            </Box>
        </>
    );
}