import { Box, Typography } from "@mui/material";

const Splash = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
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
      
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: 2,
        }}
      >
        <Typography sx={{ fontStyle: "oblique", fontSize: "24px", mb: 1 }}>
          Welcome to
        </Typography>

        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Election Commission
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            maxWidth: "600px",
            mb: 3,
          }}
        >
          "Your voice matters. Every vote counts. Join us in shaping the future by participating in the upcoming elections."
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "center",
            maxWidth: "600px",
            fontStyle: "italic",
          }}
        >
          "Empower your community and make an informed choice."
        </Typography>
      </Box>
    </Box>
  );
};

export default Splash;
