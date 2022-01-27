import React, { FC } from "react";
import { Link, Text, Box, Flex, Container } from "@chakra-ui/react";
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
            <Link
              href="https://www.facebook.com/noorsyahierah.haninie"
              isExternal
            >
              <FaFacebook color="blue" fontSize="45" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCI2UMkl0T-IIZT0iFKyy6Tg"
              isExternal
            >
              <BsYoutube color="red" fontSize="45" />
            </Link>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export { Connect };
