import {Button, Box, InputAdornment, TextField } from "@mui/material";
import { Form, Link } from "react-router";
import style from './Register.module.css'
import { AccountCircle, CalendarToday, Email, Margin, Password } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";


export default function Register() {
  const {register,handleSubmit} = useForm();

  const registerUser = async (values) =>{
    const response = await axios.post(`https://mytshop.runasp.net/api/Account/register`,values);
    console.log(response);
  }
  return (
    <>
      
  <Row className="align-items-center">
    <Col md={4} sm={12}>
      <img 
      src="/images/Frame.png"
      alt="img"
    />
</Col>

<Col md={6} sm={12}>
    <Box component={Form} 
    className={style.formC}
    onSubmit={handleSubmit(registerUser)}
>
  <Container className={style.m}>
    <Row style={{ gap: '15px' }}>
      <h1>Create New Account</h1>
<Row className="d-flex" style={{ gap: '50px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
    <label htmlFor="firstName">First Name</label>
    <TextField
      id="firstName"
      {...register('firstName')}
      label="first Name"
      sx={{ m: 1, width: '100%' }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        },
      }}
    />
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
    <label htmlFor="lastName">Last Name</label>
    <TextField
      id="lastName"
      {...register('lastName')}
      label="last Name"
      sx={{ m: 1, width: '100%' }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        },
      }}
    />
  </div>
</Row>

<label htmlFor="user Name">User Name</label>
           <TextField
            {...register('userName')}
          label="user Name"
         id="user Name"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment:
               <InputAdornment position="start">
                <AccountCircle/>
              </InputAdornment>,
            },
          }}
        />
<label htmlFor="user email">Email address</label>
           <TextField
            id="user email"
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
<label htmlFor="user password">Password</label>

           <TextField
            id="user password"
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
<label htmlFor="confirmPassword">Confirm Password</label>

           <TextField
           {...register('confirmPassword')}
          label="confirm Password"
         type="password"
         id="confirmPassword"
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
<label htmlFor="birth Of Date">Birth Of Date</label>

         <TextField
         id="birth Of Date"
         {...register('birthOfDate')}
          label="birth Of Date"
          type="date"
          sx={{ m: 1 }}
          fullWidth
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">
                <CalendarToday/>
              </InputAdornment>,
            },
          }}
        />

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
  Create New Account
</Button>
<p>Already have an Account? <Link to={`/Login`} >Login</Link></p>

        </Row>
        </Container>
   </Box>
   </Col>
   </Row>
   </>
  )
}
