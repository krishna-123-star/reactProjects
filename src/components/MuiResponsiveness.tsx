import { Box } from "@mui/material";
import {styled} from "@mui/material";

const StyledBox = styled(Box)(({theme}) => ({
    height: '300px',
    width: '300px',
    backgroundColor: theme.palette.neutral?.darker,
}))

export const MuiResponsiveness = () => {
    return (
        <>
        
        <Box
            sx={{
                height: '300px',
                width: {
                    xs: '100px',
                    sm: '200px',
                    md: '300px',
                    lg: '400px',    
                    xl: '500px',
            },
            bgcolor: 'secondary.dark',
        }}></Box>
        <StyledBox></StyledBox>
        </>
    )
}