import { useState } from 'react'
import { Box, chakra, Flex } from '@chakra-ui/react';
import Searchbar from './Searchbar'
import { AiOutlineMenu, AiOutlineAppstore } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { TiThListOutline } from 'react-icons/ti'
import { RiDashboardLine, RiSettings3Line } from 'react-icons/ri'

import CustomIcon from "./CustomIcon"
import logo from '../../images/logo.png'
import user from '../../images/user.png'

const Header = ({ clickedSideButton }) => {

    const iconsStyle = {
        color: "#959595",
        ml: "50px",
        justifyContent: "space-evenly",
        width: "150px",
        fontSize: "24px"
    }

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
        console.log(isClicked);
    }
    // const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex borderBottom="1px solid #525355"
            padding="10px"
            alignItems="center"
        >
            <Box onClick={clickedSideButton}>
                <CustomIcon icon={AiOutlineMenu} />
            </Box>
            <Flex alignItems="center">
                <img src={logo} alt="" />
                <chakra.p fontSize="24px" cursor="pointer" _hover={{ textDecoration: "underline" }}>Keep</chakra.p>
            </Flex>
            <Searchbar />
            <Flex {...iconsStyle}
            >
                <CustomIcon customPadding={true} icon={MdRefresh} />
                <CustomIcon handleClick={handleClick} customPadding={true} icon={isClicked ? TiThListOutline : RiDashboardLine} />
                <CustomIcon customPadding={true} icon={RiSettings3Line} />


            </Flex >
            <Flex {...iconsStyle}>
                <CustomIcon customPadding={true} icon={AiOutlineAppstore} />
                <img src={user} alt="" height="auto" width="45px" cursor="pointer" />
            </Flex>


        </Flex >
    );
}

export default Header;