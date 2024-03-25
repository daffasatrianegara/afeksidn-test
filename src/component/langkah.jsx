import {
  Text,
  Flex,
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";

const Langkah = () => {
  return (
    <>
      <Flex justifyContent={"center"} mt={"1em"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} w={"50%"} align={"center"}>
          4 langkah mudah melakukan konsultasi hubungan anda
        </Text>
      </Flex>
      <Flex justifyContent={"center"} pt={"2em"} gap={3} mb={"3em"}>
        <Card maxW={"20%"} bgColor={"#387ADF"} color={"white"}>
          <CardBody>
            <Image
              align={"center"}
              src="https://img.freepik.com/free-vector/sad-character-looking-cancelled-events_23-2148572030.jpg?t=st=1711394916~exp=1711398516~hmac=730bd73c337e140ab9f13e0075ea57cf98648197a7ce68826bed1a726c208246&w=740"
              alt="image"
              borderRadius={"lg"}
              w={"1000px"}
            />
            <HStack mt={"1em"} justifyContent={"center"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                1. Pilih paket konsultasi
              </Text>
            </HStack>
          </CardBody>
        </Card>
        <Card maxW={"20%"} bgColor={"#387ADF"} color={"white"}>
          <CardBody>
            <Image
              align={"center"}
              src="https://img.freepik.com/free-vector/choice-worker-concept_23-2148627427.jpg?t=st=1711394457~exp=1711398057~hmac=ac9419c9088e414636f268d455ec5ca6199c55bdc9b3be9e5bdf252c5cb13144&w=740"
              alt="image"
              borderRadius={"lg"}
              w={"1000px"}
            />
            <HStack mt={"1em"} justifyContent={"center"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                2. Pilih tenaga psikologi
              </Text>
            </HStack>
          </CardBody>
        </Card>
        <Card maxW={"20%"} bgColor={"#387ADF"} color={"white"}>
          <CardBody>
            <Image
              align={"center"}
              src="https://img.freepik.com/free-vector/blogger-review-concept_23-2148515143.jpg?t=st=1711395234~exp=1711398834~hmac=e4300f724b48c5eb8019abfc552181916a6ecfc8e54590d14cc3b9c6efd46ca6&w=740"
              alt="image"
              borderRadius={"lg"}
              w={"1000px"}
            />
            <HStack mt={"1em"} justifyContent={"center"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                3. Isi identitas & jadwal
              </Text>
            </HStack>
          </CardBody>
        </Card>
        <Card maxW={"20%"} bgColor={"#387ADF"} color={"white"}>
          <CardBody>
            <Image
              align={"center"}
              src="https://img.freepik.com/free-vector/flat-design-payday-illustration_23-2151093389.jpg?t=st=1711395787~exp=1711399387~hmac=dd97566eb0d17b0a80bb46964713c22d5364c6f137873e6745438736501d1836&w=740"
              alt="image"
              borderRadius={"lg"}
              w={"1000px"}
            />
            <HStack mt={"1em"} justifyContent={"center"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                4. Pembayaran
              </Text>
            </HStack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default Langkah;
