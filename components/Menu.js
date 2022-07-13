import React from "react";
import { Box, Text } from "native-base";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LinearGradient } from "expo-linear-gradient";

const MenuNavbar = ({ cart }) => {
  return (
    <LinearGradient colors={["#25568D", "#833197"]} start={[0, 1]} end={[1, 0]}>
      <Box h="50px" w="100%">
        <Box
          h="100%"
          w="100%"
          justifyContent="space-between"
          flexDirection="initial"
          alignItems="center"
        >
          <Box marginLeft="5">
            <GiHamburgerMenu color="#fff" size={25} />
          </Box>
          <Box marginRight="5">
            <AiOutlineShoppingCart size={25} color="#fff" />
            {cart === 0 ? null : (
              <Box
                position="absolute"
                top="-7px"
                left="12px"
                width="14px"
                height="14px"
                borderRadius="50%"
                backgroundColor="#E8C724"
                textAlign="center"
              >
                <Text fontSize="10">{cart}</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default MenuNavbar;
