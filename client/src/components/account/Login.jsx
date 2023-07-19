import { useState,useContext } from "react";
import { Box, TextField, Button, styled , Typography} from "@mui/material";
import {API} from '../../service/api';
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";



// we passed Box here so update box wrapper with component
// it is a styled component
const Component = styled(Box)`
  background-color:#e6e6e6;
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;


// css for error
const Error=styled(Typography)`
  font-size:10px;
  color:#ff6161;
  font-weight:600;
  margin-top:10px;
  line-height:0;

`;
// here css properties declared as a object variables
const Image = styled("img")({
  width: 200,
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

// object to store the values
const signupInitialValues={
  name:'',
  username:'',
  password:''
}

// object to store initial values of login
const loginInitialValues={
  username:'',
  password:''
}
const Login = ({isUserAuthenticated}) => {
  const imageURL =
    "https://cdn.pixabay.com/photo/2012/05/07/18/57/blog-49006_1280.png";

    // we want to toggle between login and signup and by default we show the login page
    const [account,toggleAccount]=useState('login');
    // to store the initial values of the object of signup
    const [signup,setSignup]=useState(signupInitialValues);
    // making state to show the error to user
    const [error,setError]=useState('');
    // making state for the login
    const [login,setLogin]=useState(loginInitialValues)

    // what values we have to extract,now values stores globally
    const {setAccount}=useContext(DataContext);

    // initialize useNavigate
    const navigate=useNavigate();
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

    const onInputChange=(e)=>{
      // console.log(e.target.name,e.target.value);
      // now we don't want to write the values , we want append new values in the previous values
      setSignup({...signup,[e.target.name]:e.target.value});
    }

    const onValueChange=(e)=>{
      setLogin({ ...login ,[e.target.name]:e.target.value});
    }

    const loginUser=async ()=>{
        let response=await API.userLogin(login);
        if(response.isSuccess){
            setError('');
            sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);
            setAccount({username:response.data.username,name:response.data.name})

            // if user is authenticated ,set as true
            isUserAuthenticated(true);
            // if login successful 
            navigate('/');
        }
        else{
          setError('Something went wrong!Please try again later');
        }
      }

    const signupUser =async()=>{
      let response=await API.userSignup(signup);
      if(response.isSuccess){
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login');
      }
      else{
        setError('Something went wrong!Please try again later');
      }
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
                <TextField variant="standard" value={login.username} onChange={(e)=>onValueChange(e)} name="username" label="Enter the Username"/>
                <TextField variant="standard" value={login.password} onChange={(e)=>onValueChange(e)} name="password" label="Enter the Password"/>
                {error && <Error>{error}</Error>}
                <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
                {/* <Button variant="contained">Login</Button> */}
                <Typography style={{textAlign:'center',color:'#878787'}}>OR</Typography>
                {/* we want to open signup to put capturing click and redirect to toggleSignUp function */}
                <SignUpButton onClick={()=>toggleSignUp()}>Create an account</SignUpButton>
                {/* <Button>Create an account</Button> */}
              </Wrapper>
            
        :


              <Wrapper>
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter the Name"/>
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter the Username"/>
              <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter the Password"/>


              {/* showing error , show it only when error occurs*/}
              {/* {error && <Typography>{error}</Typography>} */}
              {/* after defining css typography->Error */}
              {error && <Error>{error}</Error>}

              {/* <SignUpButton >SignUp</SignUpButton> */}
              {/* calling api using onclick signupUser func */}
              <SignUpButton onClick={()=>signupUser()}>SignUp</SignUpButton> 
              
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

export default Login;