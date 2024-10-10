import { Box, TextField, Typography, Button, Container } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Please enter a password"),
    }),
    onSubmit: (values, { resetForm }) => {
      const userInfoWithToken = {
        ...values,
        token: 1008,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfoWithToken));
      alert("User info stored in local storage!");
      resetForm();

      navigate("/");
    },
  });

  const handleSignIn = () => {
    navigate("/SignIn");
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
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
            Sign Up
          </Typography>

          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />

          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />

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
            Already have an account{" "}
            <Button variant="text" onClick={handleSignIn}>
              SIGNIN
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
