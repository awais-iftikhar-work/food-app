import { Dispatch, SetStateAction, useState } from "react";
import { Box } from "../elements/Box";
import { styled } from "@/theme";
import { Items } from "@/App";
import { Button } from "../elements/Button";
import { Flex } from "../elements/Flex";

const circleSize = 560;
const cycle = 360

export const Circle = ({ items, setActiveItem, activeItemIndex, setAnimate, animate }: Items & {
    setActiveItem: Dispatch<SetStateAction<number>>,
    activeItemIndex: number
    setAnimate: Dispatch<SetStateAction<boolean>>,
    animate: boolean
}) => {
    const [rotation, setRotation] = useState(90);

    const handleClick = (value:'prev'|'next') => {
        const angle = cycle / items.length;
        const newRotation = (value === 'next' ? rotation + angle : rotation - angle)
        setRotation(newRotation);
        const idx = items.findIndex((_, ind) => ind === activeItemIndex);
        if (idx === items.length-1 && value === 'next') {
            setActiveItem(0)
            return
        }
        if(value === 'prev' ) {
            setActiveItem(activeItemIndex === 0 ? items.length-1 : activeItemIndex-1 )
        }  else {
            setActiveItem(activeItemIndex + 1)
        }
         setAnimate(true)
    };
 

    return (
        <Wrapper>
            <Flex justify={"center"} css={{ mx: "auto" }} align={"center"}>
                <FoodCircle>
                    <Box className="circle" style={{ transform: `rotate(${rotation}deg)` }}>
                        {items?.map((res, idx) => (
                            <Box className="item" css={{ transform: `rotate(${(cycle / items.length) * idx}deg) translate(${circleSize / 2}px) rotate(${-(cycle / items.length) * idx}deg)` }} key={idx}>
                                <Box css={{ borderRadius: "50%", w: 100 }} as={"img"} src={res.image} />
                            </Box>
                        ))}
                    </Box>

                    <Box 
                    className="rounded-curve"
                    css={{
                        transition: "background-color 0.3s linear",
                        background: items[activeItemIndex].background,
                    }} />

                </FoodCircle>
                <Flex css={{ position: "relative" ,right:"6rem"}} align={"end"} justify={"between"} gap={"6"}  >
                    <Button onClick={() => handleClick('prev')} className="arrows" css={{ background: items[activeItemIndex].color,rotate:"180deg" }} >
                        <img src="/icons/arrow-down.svg" alt="React logo" />
                    </Button>
                    <Box onAnimationEnd={() => setAnimate(false)} 
                    css={{ w: 290, h: 290 }} className={animate ? "animate" : ""}>
                        <Box as="img" src={items[activeItemIndex].image} alt="React logo" />
                    </Box>
                    <Button className="arrows"  onClick={() => handleClick('next')}
                        css={{ background: items[activeItemIndex].color }}  >
                        <img src="/icons/arrow-down.svg" alt="React logo" />
                    </Button>

                </Flex>


            </Flex>
        </Wrapper>
    );
};


const Wrapper = styled("div", {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "560px",
    ".arrows": {
        padding: "10px",
        borderRadius: "50%",
        w: 40,
        h: 40,
        img: {
            width: 14,
            height: 14,
        },
    
    },
    img:{
        borderRadius: "50%",
    }
})

const FoodCircle = styled("div", {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    clipPath: "circle(150% at 34% -107%)",
    ".circle": {
        position: "relative",
        right: "6rem",
        width: "560px",
        height: "560px",
        border: "2px dashed black",
        borderRadius: "50%",
        transition: "transform 0.5s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ".item": {
            position: "absolute",
        }
    },
    ".rounded-curve":{
        position: "absolute", 
        bottom: "50%", 
        height: "300%", 
        width: "300%", 
        right: "-4rem", 
        zIndex: -1
    }
})



