import { useState } from "react";
import { Box, Flex, IconButton, Text, Img, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const cardWidthPercentage = 33 / cardsPerPage;

  const totalSlides = Math.ceil(cards.length / cardsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Text
        mt={"1em"}
        textAlign={"center"}
        fontSize={"4xl"}
        fontWeight={"bold"}
      >
        Profil Psikolog
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="400px"
        mb={"5em"}
        mt={"1em"}
      >
        <Box width="90%" overflow="hidden" position="relative">
          <Flex
            width={`${totalSlides * 99}%`}
            transition="all 0.3s ease"
            transform={`translateX(-${currentIndex * (100 / totalSlides)}%)`}
          >
            {cards.map((card, idx) => (
              <Box
                key={idx}
                width={`${cardWidthPercentage}%`}
                bg="white"
                boxShadow="md"
                borderRadius="md"
                p="4"
                ml="2"
                my={"1em"}
                bgColor={"#333A73"}
                gap={0}
              >
                <Img
                  src={card.image}
                  alt={`Card ${idx + 1}`}
                  w={"100%"}
                  h={"40vh"}
                  borderRadius={"md"}
                />
                <Text
                  mt="2"
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  {card.name}
                </Text>
                <Text color="white" fontSize={"lg"} m={0}>
                  {card.description}
                </Text>
                <Button size={"md"} mt={"1em"} colorScheme="purple">
                  Lihat Psikolog
                </Button>
              </Box>
            ))}
          </Flex>
          <IconButton
            onClick={prevSlide}
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon />}
            bg="#414FCA"
            color={"white"}
            _hover={{ bg: "#5661c7" }}
            w={"5%"}
            h={"20vh"}
            fontSize={"4xl"}
            ml={"0.2em"}
          />
          <IconButton
            onClick={nextSlide}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            aria-label="Next Slide"
            icon={<ChevronRightIcon />}
            bg="#414FCA"
            color={"white"}
            _hover={{ bg: "#5661c7" }}
            w={"5%"}
            h={"20vh"}
            fontSize={"4xl"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default CardCarousel;
