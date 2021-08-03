import { Flex, Icon, Text } from "@chakra-ui/react";

const NavItem = ({ icon, text, sidebarClick, setActive, active, id }) => {



    // const bgActive = () => {
    //     setBgYellow(true)
    // }
    return (
        <Flex
            onClick={() => {
                setActive(id)
            }}
            className={active === id ? 'active' : ''}
            borderTopRightRadius="25px"
            borderBottomRightRadius="25px"
            cursor="pointer" padding="15px 15px 15px 25px"
            _hover={{
                background: active ? "rgba(232,234,237,0.08)" : "rgb(160, 146, 66)"
            }}
        >
            <Icon
                as={icon}
                fontSize="24px" />
            {!sidebarClick && <Text ml="10%">{text}</Text>}

        </Flex >

    );

}

export default NavItem;