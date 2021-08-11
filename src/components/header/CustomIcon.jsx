import { Box, Icon } from "@chakra-ui/react";

const CustomIcon = ({ icon, customPadding, handleClick }) => {
    return (

        <Box onClick={handleClick} padding={customPadding ? "0px 10px 10px 10px" : "10px"}
            borderRadius="50%"
            transition="all .2s"
            cursor="pointer"
            _hover={{ bg: "rgba(232,234,237,0.08)" }}>
            < Icon as={icon} fontSize="25px" />
        </Box>

    );
}

export default CustomIcon;