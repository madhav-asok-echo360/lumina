import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Stack,
  Input,
  Text,
  Image,
  Center,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PasswordInput from "../SharedComponents/PasswordInput";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validForm, setValidForm] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function register() {
    if (formFilled()) {
      const newUser = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      };
      const goodEmail = isValidEmail();
      const goodPhoneNumber = isValidPhoneNumber();
      const goodPassword = isValidPassword();
      if (goodEmail && goodPhoneNumber && goodPassword) {
        console.log("Valid user!");
      }
    }
  }

  function formFilled() {
    setValidForm(
      name !== "" &&
        email !== "" &&
        phoneNumber !== "" &&
        password !== "" &&
        confirmPassword !== ""
    );
    return (
      name !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      confirmPassword !== ""
    );
  }

  function isValidPassword() {
    return password === confirmPassword && password.length >= 6;
  }

  function isValidEmail() {
    setValidEmail(email.includes("@"));
    return email.includes("@");
  }

  function isValidPhoneNumber() {
    setValidPhoneNumber(phoneNumber.length === 10);
    return phoneNumber.length === 10;
  }

  return (
    <Box>
      <Flex mb={5}>
        <Center>
          <Link to="/">
            <Center>
              <IconButton
                icon={<ArrowBackIcon w="5" h="5" verticalAlign="50%" />}
              />
            </Center>
          </Link>
        </Center>
        <Center flex="1" mr="100px">
          <Image
            src="https://slochamber.org/wp-content/uploads/2018/12/RISE_1024.png"
            w="100px"
            h="50px"
          />
        </Center>
      </Flex>
      <Heading>Register an account</Heading>
      <Text mb={2}>All fields are required</Text>
      <Stack>
        <Text fontWeight="bold">Name</Text>
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Text fontWeight="bold">Email</Text>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Text color="red">{validEmail ? "" : "Not a valid email address"}</Text>
        <Text fontWeight="bold">Phone Number</Text>
        <Input
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Text color="red">
          {validPhoneNumber
            ? ""
            : "Not a valid phone number (numbers only, no country code)"}
        </Text>
        <Text fontWeight="bold">Password</Text>
        <PasswordInput
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text color="red">
          {password.length >= 6
            ? ""
            : "Passwords must be at least 6 characters long"}
        </Text>
        <Text fontWeight="bold">Confirm Password</Text>
        <PasswordInput
          placeholder="Confirm Password"
          setPassword={setConfirmPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Text color="red">
          {password === confirmPassword
            ? ""
            : "Password and Confirm password must be the same"}
        </Text>

        <Button onClick={() => register()}>Register</Button>
        <Text color="red">
          {validForm ? "" : "Please fill out all text boxes"}
        </Text>
      </Stack>
    </Box>
  );
};

export default Signup;
