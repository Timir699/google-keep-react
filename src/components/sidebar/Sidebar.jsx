import { Box } from '@chakra-ui/react';
import NavItem from './NavItem'
import { AiOutlineBulb, AiOutlineBell } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { RiInboxArchiveLine } from "react-icons/ri"
import { BiTrash } from "react-icons/bi"
import { useState } from "react";
import shortid from 'shortid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NoteCreate from '../main/NoteCreate'
import Reminders from '../main/Reminders'
import EditLabels from '../main/EditLabels'
import Archives from '../main/Archives'
import DeletedNotes from '../main/DeletedNotes'


const navigation = [
    {
        icon: AiOutlineBulb,
        text: "Notes",
        id: shortid.generate(),
        path: "/"
    },
    {
        icon: AiOutlineBell,
        text: "Reminders",
        id: shortid.generate(),
        path: "/reminder"
    },
    {
        icon: BsPencil,
        text: "Edit labels",
        id: shortid.generate(),
        path: "/edit_labels"
    },
    {
        icon: RiInboxArchiveLine,
        text: "Archive",
        id: shortid.generate(),
        path: "/archives"
    },
    {
        icon: BiTrash,
        text: "Trash",
        id: shortid.generate(),
        path: "/trash"
    }
]

const Sidebar = ({ sidebarClick }) => {

    const [active, setActive] = useState(navigation[0].id)

    return (
        <Router>
            <Box width={sidebarClick ? "60px" : "250px"}>
                {navigation.map((item) => {
                    return (
                        <NavItem key={item.id}
                            id={item.id}
                            active={active}
                            setActive={setActive}
                            icon={item.icon}
                            text={item.text}
                            sidebarClick={sidebarClick}
                            path={item.path}

                        />
                    )
                })}
            </Box>

            <Route path="/" exact component={NoteCreate} />
            <Route path="/reminder" exact component={Reminders} />
            <Route path="/edit_labels" exact component={EditLabels} />
            <Route path="/archives" exact component={Archives} />
            <Route path="/trash" exact component={DeletedNotes} />


        </Router>

    );
}

export default Sidebar;