import { styled } from "@/theme"
import { Box } from "../elements/Box"
import { Flex } from "../elements/Flex"

const Header = () => {
    return (
        <Wrapper>
            <Flex as={"nav"} justify={"between"} align={"center"}>
                <Flex gap={"20"} align={"center"}>
                <Box>
                    <img src="/icons/logo.svg" />
                </Box>
                <Flex as={"ul"}>
                    <li>Breakfast</li>
                    <li>Lunch </li>
                    <li>Dinner</li>
                </Flex>
                </Flex>
                <Box>
                    <img src="/icons/cart.svg" />
                </Box>
            </Flex>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled("header", {
    position:"relative",
    zIndex:1,
    py:"2rem",
    nav: {
        ul: {
            fontSize:"14px",
            fontWeight:"500",
            li: {
                
                listStyle: "none",
                px:"2rem",
            }
        }
    }

})