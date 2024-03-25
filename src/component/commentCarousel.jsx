import { useState } from "react";
import { Box, Flex, IconButton, Text, Img, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CommentCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const cardWidthPercentage = 32.3 / cardsPerPage;

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
        Kata Mereka Tentang Kami
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="250px"
        mb={"2em"}
      >
        <Box width="90%" overflow="hidden" position="relative">
          <Flex
            width={`${totalSlides * 100}%`}
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
                bgColor={"#DDDDDD"}
                gap={0}
              >
                <HStack>
                  <Img
                    src={card.image}
                    alt={`Card ${idx + 1}`}
                    w={"10vh"}
                    h={"10vh"}
                    borderRadius={"90px"}
                  />
                  <Text
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    color={"black"}
                    ml={"1em"}
                  >
                    {card.name}
                  </Text>
                </HStack>
                <Text color="black" fontSize={"lg"} m={0} mt={"1em"}>
                  {card.comment}
                </Text>
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
            bg="trans"
            color={"black"}
            w={"5%"}
            h={"20vh"}
            _hover={{ bg: "trans", color: "grey" }}
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
            bg="trans"
            color={"black"}
            _hover={{ bg: "trans", color: "grey" }}
            w={"5%"}
            h={"20vh"}
            fontSize={"4xl"}
          />
        </Box>
      </Flex>
    </>
  );
};

export default CommentCarousel;
