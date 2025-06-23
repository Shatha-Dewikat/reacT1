import { Button, Box, InputAdornment, TextField } from "@mui/material";
import style from './Forget.module.css';
import { Email } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from 'react-router';

import { useNavigate } from "react-router-dom";

export default function Forget() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const LoginUser = async (values) => {
    try {
      const response = await axios.post(`https://mytshop.runasp.net/api/Account/ForgotPassword`, values);
      console.log(response);
      navigate("/RePass", { state: { email: values.email } });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
         
  <Row className="align-items-center">
    <Col md={4} sm={12}>
      <img 
      src="/images/Frame.png"

      alt="img"
    />
</Col>

<Col md={6} sm={12}>
       <Box component="form"
    className={style.formC}
    onSubmit={handleSubmit(LoginUser)}
>
  <Container className={style.m}>
    <Row style={{ gap: '15px' }}>
      <h2>Step1</h2>
      <h1>Forget Password</h1>
  

          
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
  Send Code
</Button>
<p>Remembered your password? <Link to={`/Login`} >Login</Link></p>
        </Row>
        </Container>
   </Box>
   </Col>
   </Row>

    
  );
}
