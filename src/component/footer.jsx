import { HStack, VStack, Box, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bgColor={"#387ADF"} width={"100%"} p={"3em"} >
      <HStack mt={'2em'} mb={'3em'}>
        <Box bgColor={"white"} borderRadius={"lg"} p={"2em"} w={"45%"}>
          <VStack>
            <HStack>
              <Box w={"20vh"} h={"20vh"}>
                <Image src="/afeksi.png" />
              </Box>
              <VStack align={"left"} gap={0} fontSize={"lg"}>
                <Text>JI. Gubeng Jaya IX no.1 Surabaya, Indonesia</Text>
                <Text>Contact: +6282142625552</Text>
                <Text>Email: afeksidn@gmail.com</Text>
              </VStack>
            </HStack>
            <Text ml={"1em"} fontSize={"lg"}>
              Afeksi merupakan Platfom layanan edukasi dan konsultasi kesehatan
              hubungan berbasis psikologi relasi pertama di indonesia
            </Text>
            <HStack mr={"auto"} ml={"1em"} gap={3}>
              <Image src="/ig.png" alt="ig" w={"7vh"} h={"7vh"} />
              <Image src="/x.png" alt="x" w={"7vh"} h={"7vh"} />
              <Image src="/yt.png" alt="yt" w={"7vh"} h={"7vh"} />
              <Image src="/tt.png" alt="tt" w={"7vh"} h={"7vh"} />
              <Image src="/in.png" alt="in" w={"7vh"} h={"7vh"} />
            </HStack>
          </VStack>
        </Box>
        <Box ml={"4em"} color={"white"}>
          <HStack alignItems={"flex-start"}>
            <VStack align={"left"} gap={1}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                Layanan
              </Text>
              <Text cursor={"pointer"} mt={"1em"} fontSize={"xl"}>
                Konseling
              </Text>
              <Text cursor={"pointer"} fontSize={"xl"}>
                Mentoring
              </Text>
            </VStack>
            <VStack ml={"3em"} align={"left"} gap={1}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                Tentang Kami
              </Text>
              <Text cursor={"pointer"} mt={"1em"} fontSize={"xl"}>
                Tentang Kami
              </Text>
              <Text cursor={"pointer"} fontSize={"xl"}>
                Webinar
              </Text>
              <Text cursor={"pointer"} fontSize={"xl"}>
                Campaign
              </Text>
              <Text cursor={"pointer"} fontSize={"xl"}>
                Karir
              </Text>
              <Text cursor={"pointer"} fontSize={"xl"}>
                Rekap History
              </Text>
            </VStack>
            <VStack ml={"3em"} align={'left'} gap={1}>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                Yang Lainnya
              </Text>
              <Text cursor={"pointer"} mt={"1em"} fontSize={"xl"}>
                Kebijakan Privasi
              </Text>
              <Text cursor={"pointer"} fontSize={"xl"}>
                FAQ
              </Text>
            </VStack>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Footer;
