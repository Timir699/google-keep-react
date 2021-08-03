import { Box } from '@chakra-ui/react';
import NavItem from './NavItem'
import { AiOutlineBulb, AiOutlineBell } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { RiInboxArchiveLine } from "react-icons/ri"
import { BiTrash } from "react-icons/bi"
import { useState } from "react";
import shortid from 'shortid';

const navigation = [
    {
        icon: AiOutlineBulb,
        text: "Notes",
        id: shortid.generate()
    },
    {
        icon: AiOutlineBell,
        text: "Reminders",
        id: shortid.generate()
    },
    {
        icon: BsPencil,
        text: "Edit labels",
        id: shortid.generate()
    },
    {
        icon: RiInboxArchiveLine,
        text: "Archive",
        id: shortid.generate()
    },
    {
        icon: BiTrash,
        text: "Trash",
        id: shortid.generate()
    }
]

const Sidebar = ({ sidebarClick }) => {

    const [active, setActive] = useState(navigation[0].id)

    return (
        <Box paddingBottom="270px" width={sidebarClick ? "60px" : "250px"}>
            {navigation.map((item) => {
                return (
                    <NavItem key={item.id}
                        id={item.id}
                        active={active}
                        setActive={setActive}
                        icon={item.icon}
                        text={item.text}
                        sidebarClick={sidebarClick} />
                )
            })}
        </Box>
    );
}

export default Sidebar;