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
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          zIndex: 1,
          color: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography sx={{ fontStyle: "oblique" }}>Welcome to</Typography>

        <Typography
          sx={{
            fontSize: "32px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Election Commission
        </Typography>
      </Box>
    </Box>
  );
};

export default Splash;
