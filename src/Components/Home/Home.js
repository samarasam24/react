import { Box,Typography,Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomePage = () => {
const CustomizedBox = styled(Box)
`
//   background-color:#1d3144;
  height:100vh;
  color:#d8aa26;
  font-weight:900; 
  padding-top:70px
`;
    return(
        <>
        {/* <CustomizedBox>
            <Typography>
                React Learnings...
            </Typography>
            <Box>
            <Typography sx={{width:600}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deserunt corrupti commodi exercitationem et, molestias facilis repellat laudantium obcaecati debitis veniam.  
            </Typography>
            <Button>Register</Button>
            </Box>
        </CustomizedBox> */}
        </>
    );
};