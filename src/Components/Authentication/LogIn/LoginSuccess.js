import { Container, Typography } from "@mui/material";

export const LoginSuccess = () => {

    return(
        <Container
        sx={
            {
                marginTop:20, 
                display:'flex',
                justifyContent:'center', 
                width:500
            }
        }>
          <Typography component={'h2'} variant="h2">Logged in SuccessFully...</Typography>  
        </Container>
    );
};