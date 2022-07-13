import React from "react";
import {
  Box,
  AspectRatio,
  Stack,
  Heading,
  HStack,
  Button,
  Text,
  Image,
} from "native-base";

export const Card = ({
  image,
  title,
  description,
  handleCartItems,
  price,
  id,
  category,
}) => {
  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
      key={id}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: `${image}`,
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {category.toUpperCase()}
          </Text>
          <Heading size="md" ml="-1">
            {title}
          </Heading>
        </Stack>
        <Text fontWeight="400">{description}</Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="#507ED8"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
              paddingLeft="0"
            >
              <Button
                variant="unstyled"
                color="#507ED8"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
                paddingLeft="0"
                onPress={() => handleCartItems()}
              >
                + Add to cart
              </Button>
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Text
              color="black"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="500"
              fontSize={18}
            >
              $ {price}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};
