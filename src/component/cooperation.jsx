import { Box, Image, Flex, Text } from "@chakra-ui/react";

const Cooperation = ({ image }) => {
  return (
    <>
      <Box width={"100%"} bgColor={"#515FDA"} pt={"3em"} pb={"5em"}>
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          mb={"1em"}
          textAlign={"center"}
          color={"white"}
        >
          Telah Berkerja sama dengan:
        </Text>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          flexWrap="wrap"
          mt={"5em"}
        >
          {image?.map((data, index) => {
            return (
              <>
                <Box w={"40vh"} h={"40vh"}>
                  <Image src={data?.url} alt={index + 1} />
                </Box>
              </>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default Cooperation;
