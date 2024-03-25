import { Text, Box, Image, Flex, HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box margin={0} w={"100%"} bgColor={"white"} shadow={1}>
        <Flex justifyContent={"flex-start"}>
          <Box
            width={"9%"}
            cursor={"pointer"}
            onClick={() => navigate("/")}
            ml={"4em"}
          >
            <Image
              src="https://media.licdn.com/dms/image/C560BAQGeQm-dMIFH6w/company-logo_200_200/0/1668507446632?e=1719446400&v=beta&t=J0-827HZNTN-MMrEi40LZvcDgF1frjvQwhJ8loJ6KIM"
              alt="logo afeksidn"
            />
          </Box>
          <HStack
            fontWeight={"semibold"}
            fontSize={"xl"}
            gap={5}
            color={"#A9A9A9"}
            ml={"10%"}
            w={"auto"}
          >
            <Text
              cursor={"pointer"}
              _hover={{ color: "black" }}
              color={"black"}
            >
              Beranda
            </Text>
            <Text cursor={"pointer"} _hover={{ color: "black" }}>
              Layanan
            </Text>
            <Text cursor={"pointer"} _hover={{ color: "black" }}>
              Kegiatan
            </Text>
            <Text cursor={"pointer"} _hover={{ color: "black" }}>
              Tentang Kami
            </Text>
            <Text cursor={"pointer"} _hover={{ color: "black" }}>
              FAQ
            </Text>
            <Text cursor={"pointer"} _hover={{ color: "black" }}>
              Karir
            </Text>
            <HStack gap={4} ml={"3em"}>
              <Button
                w={"8em"}
                bgColor={"#387ADF"}
                color={"white"}
                _hover={{ bgColor: "#1261db" }}
              >
                Register
              </Button>
              <Button
                bgColor={"#FADC40"}
                w={"8em"}
                _hover={{ bgColor: "#F4CE14" }}
              >
                Login
              </Button>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
