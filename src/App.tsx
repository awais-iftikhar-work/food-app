import { useState } from 'react'
import { Flex } from './components/elements/Flex'
import { Box } from './components/elements/Box'
import { globalStyles } from './theme'
import { Button } from './components/elements/Button'
import { Circle } from './components/Circle'
import Header from './components/Header'
import { FOOD_CIRCLE_ITEMS } from './config/constants'
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export interface Items {
  items: {
    image: string,
    background: string,
    color: string,
    price: number,
    title: string,
    description: string
  }[]
}


function App() {
  globalStyles();

  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  return (
    <Flex direction={"column"} css={{ minHeight: "100vh" }}>
      <Header />
      <Flex as={"section"} align={"center"} justify={"between"} flex={"1"}>
        <Box css={{ marginTop: "auto", marginBottom: 0, w: "100%" }}>
          <Flex justify={"between"} align={"center"} css={{ w: "100%", position: "relative" }} gap={"10"}>
            <Flex direction={"column"} gap={"2"} css={{ maxWidth: "350px" }}>
              <Box className={animate ? "text-animate" : ""} 
              as={'h1'} 
              css={{ fontSize: "44px",fontWeight:"$semibold", color: FOOD_CIRCLE_ITEMS[activeItemIndex].color }}>
                {FOOD_CIRCLE_ITEMS[activeItemIndex].price}$
              </Box>
              <Box className={animate ? "text-animate" : ""} 
              as={"h3"} 
              css={{ fontSize: "36px" ,fontWeight:"$medium"}}>{FOOD_CIRCLE_ITEMS[activeItemIndex].title}</Box>
              <Box className={animate ? "text-animate" : ""} css={{ fontSize: "13px",fontWeight:"$normal" }}>
                {FOOD_CIRCLE_ITEMS[activeItemIndex].description}
                </Box>
              <Button css={{ mt: "$2" ,backgroundColor:FOOD_CIRCLE_ITEMS[activeItemIndex].color}} >
                ORDER NOW
              </Button>
            </Flex>
            <Circle animate={animate} 
            setAnimate={setAnimate} 
            items={FOOD_CIRCLE_ITEMS} 
            activeItemIndex={activeItemIndex} 
            setActiveItem={setActiveItemIndex} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}


export default App


