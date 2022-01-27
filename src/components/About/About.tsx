import React, { FC } from "react";
import {
  SimpleGrid,
  Container,
  Text,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";

import founder from "../../assets/images/my-love.jpeg";

const About: FC = () => {
  return (
    <>
      <Container maxW="container.xl" my={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
          <Box>
            <Image
              borderRadius="xl"
              boxSize={{ base: "md" }}
              objectFit="cover"
              src={founder}
              alt="founder"
              boxShadow="lg"
            />
          </Box>
          <Box>
            <Flex my={5}>
              <Text>
                Hai, I am Noorsyaheirah Haninie, I am founder and Entrepreneur
                of Anne Empayar. Anne-Empayar is a main brand of all the
                products. We as a Anne Empayar provide different type of
                services like :
              </Text>
            </Flex>
            <Flex direction="column">
              <Text>Anne Stylo</Text>
              <Text>Anne Tech</Text>
              <Text>Anne Cafe</Text>
              <Text>Anne Studio</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export { About };
