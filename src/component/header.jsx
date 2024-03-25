import { Box, Text, VStack, Image, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Box margin={0}>
        <Image
          src="https://img.freepik.com/free-vector/flat-students-dormitory-room-preparing-exams_88138-1043.jpg?t=st=1711386468~exp=1711390068~hmac=5d80f60962e96b7faaf83f135448c0101f6b5ba48e4de120e3b0eb7ead2faabe&w=1380"
          w={"100%"}
          h={"81vh"}
          objectFit="cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <VStack
          color={"white"}
          pos={"absolute"}
          position="absolute"
          top="0"
          mt={"17%"}
          align={"left"}
        >
          <Box w={"40%"} ml={"2em"}>
            <Text fontSize={"4xl"} fontWeight={"bold"} textAlign={"left"}>
              Bersama dan berdampingan menciptakan hubungan yang sehat di
              seluruh dunia
            </Text>{" "}
            <Text fontSize={"2xl"}>
              Bercerita dan Berbagi rasa, Tenangkan hati dan tenangkan diri
            </Text>
            <Button
              w={"11em"}
              mt={"2em"}
              bgColor={"#FADC40"}
              _hover={{ bgColor: "#F4CE14" }}
            >
              Mulai Konsultasi
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Header;
