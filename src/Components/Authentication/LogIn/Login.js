import { TextField, Button, Container, Typography } from '@mui/material';

export function LoginComponenet() {
    return(
        <Container  sx={
            {
                marginTop:25, 
                display:'flex',
                justifyContent:'center',
            }
        }>
        <form className='d-flex rounded flex-column gap-2 shadow p-5'>
        <Typography component='h1' variant='h5'>Log In</Typography>
        <TextField
          variant="outlined" 
          size='small'
        />
        <TextField
          variant="outlined" 
          size='small'
        />
        <Button
          type="submit" 
          variant="contained"
          color="primary"
          size='small'
           sx={
            {
                alignSelf:'end',
            }
           }
        >
          Submit
        </Button>
      </form>
        </Container>
    );
};