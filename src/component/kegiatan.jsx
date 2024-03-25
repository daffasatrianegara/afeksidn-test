import {
  Box,
  Card,
  CardBody,
  Image,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const Kegiatan = () => {
  return (
    <>
      <Box bgColor={"#FADC40"}>
        <Flex justifyContent={"center"}>
          <Text
            align={"center"}
            pt={"1em"}
            fontWeight={"bold"}
            fontSize={"4xl"}
            w={"50%"}
          >
            Ikuti kegiatan yang sedang berlangsung
          </Text>
        </Flex>
        <Flex gap={"5"} justifyContent={"center"} pt={"2em"} pb={"3em"}>
          <Card maxW={"25%"} bgColor={"#414FCA"}>
            <CardBody>
              <Image
                src="https://img.freepik.com/free-vector/influencer-recording-new-video_23-2148522553.jpg?t=st=1711392478~exp=1711396078~hmac=c1a332ef58018ac98e4466305467d5bc55e210c1f42591b4f3e3a6a028607c76&w=900"
                alt="img-live"
                borderRadius="lg"
              />
              <Heading
                textAlign={"center"}
                mt={"0.5em"}
                size={"md"}
                color={"white"}
              >
                Live Instagram
              </Heading>
              <Flex justifyContent={"center"} mt={"1em"}>
                <Button size={"sm"} colorScheme="yellow">
                  Ikuti Kegiatan
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card maxW={"25%"} bgColor={"#414FCA"}>
            <CardBody>
              <Image
                src="https://img.freepik.com/free-vector/team-attracting-investment-capital-people-pulling-rope-steel-safe-money-flat-vector-illustration-finance-saving-profit-concept_74855-10161.jpg?t=st=1711393716~exp=1711397316~hmac=def6d0d4bf7f5cc41289f3ee9a00a478b28d99a3f8677be24cb98db53fd1d250&w=900"
                alt="img-challenge"
                borderRadius="lg"
              />
              <Heading
                textAlign={"center"}
                mt={"0.5em"}
                size={"md"}
                color={"white"}
              >
                Tantangan Permainan
              </Heading>
              <Flex justifyContent={"center"} mt={"1em"}>
                <Button size={"sm"} colorScheme="yellow">
                  Ikuti Kegiatan
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card maxW={"25%"} bgColor={"#414FCA"}>
            <CardBody>
              <Image
                src="https://img.freepik.com/free-vector/hand-drawn-flat-people-talking_23-2149056625.jpg?t=st=1711393783~exp=1711397383~hmac=7ef7d6d26f2058d0b89ca172ea82fecfa78afb17353750f1c14924c5019836a3&w=900"
                alt="img-live"
                borderRadius="lg"
              />
              <Heading
                textAlign={"center"}
                mt={"0.5em"}
                size={"md"}
                color={"white"}
              >
                Curhat Ceria
              </Heading>
              <Flex justifyContent={"center"} mt={"1em"}>
                <Button size={"sm"} colorScheme="yellow">
                  Ikuti Kegiatan
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default Kegiatan;
