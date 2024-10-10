import { Box, TextField, Typography, Button, Container } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Please enter a password"),
    }),
    onSubmit: (values, { resetForm }) => {
      const userInfoString = localStorage.getItem("userInfo");
      const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
      const userPassword = userInfo?.password;

      if (userPassword === values.password) {
        alert("Login Successfully");
        navigate("/");
      } else {
        alert("Incorrect password");
      }
      resetForm();
    },
  });

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <Box>
      <Box
        sx={{
          position: "absolute",
          backgroundImage: `url("https://img.freepik.com/premium-photo/blurred-magical-background-with-defocused-go-vote-text-emphasizing-importance-voting_174533-30009.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "400px",
            gap: 2,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            position: "relative",
            zIndex: 1, // Make sure this box is on top
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
            Sign In
          </Typography>

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#6E61E7",
              "&:hover": {
                backgroundColor: "#6379EE",
              },
            }}
          >
            Submit
          </Button>

          <Typography sx={{ textAlign: "center" }}>
            Create a new account
            <Button variant="text" onClick={handleSignUp}>
              SIGNUp
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Signin;
