import { Box, Flex, chakra, Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'

const Searchbar = () => {
    const [focus, setFocus] = useState(false)

    return (
        <Flex
            visibility={{
                base: "none",
                sm: "none",
            }}
            px="10px" borderRadius="8px" height="50px" width="600px"
            style={{
                background: focus ? " #fff" : "#525355",
                color: focus ? "#525355" : "#fff"
            }}
            onFocus={() => {
                setFocus(true)
            }}
            onBlur={() => setFocus(false)}
            alignItems="center"
            ml="100px" >
            <Flex
                alignItems="center"
                justifyContent="center"
                padding="8px" margin="3px"
                borderRadius="50%"
                cursor="pointer"
                _hover={{ bg: focus ? "#ddd" : "rgba(232,234,237,0.08)" }}>
                <Icon as={AiOutlineSearch}
                    fontSize="20px" mt="2px" />
            </Flex >
            <chakra.input height="100%" width="100%" ml="5px" placeholder="Search" _focus={{ bg: "#fff", color: "#000", borderRadius: '8px' }} bg="transparent" border="none" outline="none" />
            {focus && <Box
                padding="5px 8px 8px 8px" margin="3px"
                borderRadius="50%"
                cursor="pointer"
                _hover={{ bg: focus ? "#ddd" : "rgba(232,234,237,0.08)" }}>
                <Icon as={IoMdClose} fontSize="20px" />
            </Box>}
        </Flex >
    );
}

export default Searchbar;