import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useColorMode, Flex, Button, Box } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box boxShadow="dark-lg" p={1}>
        <Flex justify="flex-end" m={2}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BiMoon /> : <BiSun />}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export { Navbar };
