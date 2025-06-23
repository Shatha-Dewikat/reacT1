import { Button, Box, InputAdornment, TextField } from "@mui/material";
import style from './Continue.module.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";

export default function Continue() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  // البيانات من الصفحة السابقة
  const email = location.state?.email || "";
  const code = location.state?.code || "";

  const LoginUser = async (values) => {
    const dataToSend = {
      email: email,
      code: code,
      password: values.password,
      confirmPassword: values.confirmPassword
    };

    try {
      const response = await axios.patch(
        `https://mytshop.runasp.net/api/Account/SendCode`,
        dataToSend
      );
      console.log("Password reset successful!", response);
      navigate("/Login"); // أو وين ما بدك تروحي بعد النجاح
    } catch (error) {
      console.error("Error:", error.response?.data || error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Row className="align-items-center">
      <Col md={4} sm={12}>
        <img  src="/images/Frame.png"  alt="img" />
      </Col>

      <Col md={6} sm={12}>
        <Box component="form"
          className={style.formC}
          onSubmit={handleSubmit(LoginUser)}
        >
          <Container className={style.m}>
            <Row style={{ gap: '15px' }}>
              <h2>Step 3</h2>
              <h1>Set a New Password</h1>
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
                    backgroundColor: '#3cb6be',
                  },
                }}
              >
             Reset Password
              </Button>

              <p>
                Remembered your password?{" "}
                <Link to={`/Login`}>Login</Link>
              </p>
            </Row>
          </Container>
        </Box>
      </Col>
    </Row>
  );
}
