import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box>
      <Heading>Placeholder Home</Heading>
      <Link to="/sign-up">
        <Button>Go to sign up</Button>
      </Link>
    </Box>
  );
};

export default HomePage;
