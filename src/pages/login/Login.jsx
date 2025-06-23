import {Button, Box, InputAdornment, TextField } from "@mui/material";
import { Form } from "react-router";
import style from './Login.module.css'
import { AccountCircle, CalendarToday, Email, Password } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

import { Link } from 'react-router';



export default function Login() {
  const {register,handleSubmit} = useForm();

  const LoginUser = async (values) =>{
    const response = await axios.post(`https://mytshop.runasp.net/api/Account/Login`,values);
    console.log(response);
  }
  return (
 <>
      
  <Row className="align-items-center">
    <Col md={4} sm={12}>
      <img 
      src="/img/Frame.png"
      alt="img"
    />
</Col>

<Col md={6} sm={12}>
       <Box component={Form} 
    className={style.formC}
    onSubmit={handleSubmit(LoginUser)}
>
  <Container className={style.m}>
    <Row style={{ gap: '15px' }}>
      <h1>Login</h1>
  

          
         <label>Email Address</label>
           <TextField
           {...register('email')}
          label="user email"
          type="email"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <Email/>
              </InputAdornment>,
            },
          }}
        />
<label>Password</label>
           <TextField
           {...register('password')}
          label="user password"
         type="password"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <Password/>
              </InputAdornment>,
            },
          }}
        />

            <Link 

  to={`/Forget`}
>
  Forget Password
</Link>
  <Button
  type="submit"
  variant="contained"
  sx={{
    backgroundColor: '#4FC4CA',
    color: '#fff',
    height: '36px',
    fontSize: '0.85rem',
    textTransform: 'none',
    px: 3,
    '&:hover': {
      backgroundColor: '#3cb6be', // لون أغمق شوي عند التمرير
    },
  }}
>
  Login
</Button>
<p>Don’t Have an Account? <Link to={`/Register`} >Create Account</Link></p>

        </Row>
        </Container>
   </Box>
   </Col>
   </Row>
   </>

  )
}
