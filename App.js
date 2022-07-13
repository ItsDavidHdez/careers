import React, { useState, useEffect } from "react";
import {
  Text,
  Center,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Image,
} from "native-base";
import { useFonts } from "expo-font";
import MenuNavbar from "./components/Menu";
import { useGetDatas } from "./hooks/useGetDatas";
import { Card } from "./components/Card";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(0);

  const [loaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Medium.ttf"),
  });

  useEffect(() => {
    useGetDatas(setData);
  }, []);

  const handleCartItems = () => {
    setCart(cart + 1);
  };

  return (
    <NativeBaseProvider>
      <Box style={{ fontFamily: "OpenSans" }}>
        <MenuNavbar cart={cart} />
        <Image
          source={{
            uri: "https://1.bp.blogspot.com/-1Qj6COPcux0/XtSPCdq2JYI/AAAAAAAAiFc/sVslU24JcZoHbJD703YIQvGVAIimZTqNgCLcBGAsYHQ/w640-h426/cursos-gratis-aprender-dibujar-todos-niveles.jpeg",
          }}
          alt="Alternate Text"
          size="xl"
          w="100%"
          marginBottom="4"
        />

        <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px={4}
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <Box alignItems="center">
              <Box position="absolute" zIndex="99" top="-125px">
                <Text color="#fff" fontSize="14px">
                  NUEVO CURSO
                </Text>
                <Text color="#fff" fontSize="20px" fontWeight="700">
                  TÉCNICAS DE ILUSTRACIÓN PARA LIBROS INFANTILES
                </Text>
                <Text color="#fff" fontSize="14px">
                  Ver más
                </Text>
              </Box>
              {data.map((item) => (
                <Card
                  image={item.images[0]}
                  title={item.title}
                  description={item.description}
                  handleCartItems={handleCartItems}
                  price={item.price}
                  key={item.id}
                  category={item.category}
                />
              ))}
            </Box>
            ;
          </VStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
