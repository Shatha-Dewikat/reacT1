import { useState, useRef, useEffect } from "react";
import {
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./RePass.module.css";

export default function RePass() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  // استلمت الايميل من الصفحة السابقة
  const emailFromPrev = location.state?.email || "";

  const [code, setCode] = useState(["", "", "", ""]);
  const codeRefs = useRef([]);

  useEffect(() => {
    // عبّي حقل الإيميل بالقيمة اللي جايه من الصفحة السابقة
    if (emailFromPrev) {
      setValue("email", emailFromPrev);
    }
  }, [emailFromPrev, setValue]);

  const handleCodeChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        codeRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      codeRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = (data) => {
    const fullCode = code.join("");

    if (fullCode.length < 4) {
      alert("Please enter the full 4-digit code");
      return;
    }

    navigate("/Continue", {
      state: {
        email: data.email,
        code: fullCode,
      },
    });
  };

  return (
    <Row className="align-items-center">
      <Col md={4} sm={12}>
        <img   src="/images/Frame.png" alt="img" />
      </Col>

      <Col md={6} sm={12}>
        <Box
          component="form"
          className={style.formC}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Container className={style.m}>
            <Row style={{ gap: "15px" }}>
              <h2>Step 2</h2>
              <h1>Enter Verification Code</h1>

              <TextField
                {...register("email")}
                label="Email"
                fullWidth
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                {[0, 1, 2, 3].map((index) => (
                  <TextField
                    key={index}
                    inputRef={(el) => (codeRefs.current[index] = el)}
                    value={code[index]}
                    onChange={(e) =>
                      handleCodeChange(index, e.target.value)
                    }
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    slotProps={{
                      maxLength: 1,
                      style: {
                        textAlign: "center",
                        fontSize: "1.5rem",
                      },
                    }}
                    sx={{ width: 60 }}
                  />
                ))}
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#4FC4CA",
                  color: "#fff",
                  height: "36px",
                  fontSize: "0.85rem",
                  textTransform: "none",
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#3cb6be",
                  },
                }}
              >
                Continue
              </Button>
            </Row>
          </Container>
        </Box>
      </Col>
    </Row>
  );
}
