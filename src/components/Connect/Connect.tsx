import React, { FC } from "react";
import { Center, Text, Box, Flex, Container } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Connect: FC = () => {
  return (
    <>
      <Container maxW="xl" centerContent my={2}>
        <Box my={2}>
          <Text>Connect With Me</Text>
        </Box>
        <Box>
          <Flex gap={15}>
            <FaFacebook color="blue" fontSize="45" />
            <BsYoutube color="red" fontSize="45" />
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export { Connect };
