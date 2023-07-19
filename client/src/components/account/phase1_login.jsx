// this is simple first file of logic without backend
import { useState } from "react";
import { Box, TextField, Button, styled , Typography} from "@mui/material";
// import GoogleSignIn from "./GoogleSignIn";

// we passed Box here so update box wrapper with component
// it is a styled component
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
// here css properties declared as a object variables
const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const LoginButton=styled(Button)`
  background:#FB603A;
  font-size:15px;
box-shadow: 3px 7px 13px #888888;
`

const SignUpButton=styled(Button)`
box-shadow: 3px 5px 10px #888888;
`
// we have to apply css on box which contains buttons
const Wrapper=styled(Box)`
  padding:25px 35px;
  display:flex;
  flex:1;
  flex-direction:column;
  gap: 15px;
`
const Login = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

    // we want to toggle between login and signup and by default we show the login page
    const [account,toggleAccount]=useState('login');

    // above line can only read, if we have change the state then we have to change toggleAccount
    // const toggleSignUp=()=>{
    //   toggleAccount('signup')
    // }
    // const toggleLogin=()=>{
    //   toggleAccount('login')
    // }

    // we can do toggle by single function also
    const toggleSignUp=()=>{
      account==='login'? toggleAccount('signup') : toggleAccount('login')
    }

  return (
    // <p>Hello from login</p>
    // <div>hello</div>
    // <Box>Hello</Box>
    // {/* <Box> */}
    <Component>
      <Box>
        <Image src={imageURL} alt="Login" />
        {/* <img src={imageURL} alt="Login"  /> */}
        {/* <Box> */}
        {
          account==='login' ?
                <Wrapper>
                <TextField variant="standard" label="Enter the Username"/>
                <TextField variant="standard" label="Enter the Password"/>
                <LoginButton variant="contained">Login</LoginButton>
                {/* <Button variant="contained">Login</Button> */}
                <Typography style={{textAlign:'center',color:'#878787'}}>OR</Typography>
                {/* we want to open signup to put capturing click and redirect to toggleSignUp function */}
                <SignUpButton onClick={()=>toggleSignUp()}>Create an account</SignUpButton>
                {/* <Button>Create an account</Button> */}
              </Wrapper>
            
        :


              <Wrapper>
              <TextField variant="standard" label="Enter the Name"/>
              <TextField variant="standard" label="Enter the Username"/>
              <TextField variant="standard" label="Enter the Password"/>
              <SignUpButton >SignUp</SignUpButton>
              <Typography style={{textAlign:'center',color:'#878787'}}>OR</Typography>
              <LoginButton variant="contained" onClick={()=>toggleSignUp()}> Already have an account</LoginButton>
              {/* <LoginButton variant="contained" onClick={()=>toggleLogin()}> Already have an account</LoginButton> */}
            </Wrapper>

        }
       {/* </Box> */}
      </Box>
    </Component>
    // </Box>
  );
};

// export default Login;