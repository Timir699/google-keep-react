import { Box } from '@chakra-ui/react';
import NavItem from './NavItem'
import { AiOutlineBulb, AiOutlineBell } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { RiInboxArchiveLine } from "react-icons/ri"
import { BiTrash } from "react-icons/bi"
import { useState } from "react";
import shortid from 'shortid';
import NoteCreate from '../main/NoteCreate';
import Reminders from '../main/Reminders';
import EditLabels from '../main/EditLabels'
import Archives from '../main/Archives'
import DeletedNotes from '../main/DeletedNotes';

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

const navigation = [
    {
        icon: AiOutlineBulb,
        text: "Notes",
        id: shortid.generate(),
        path: "/notes",
        exact: true,
        component: { NoteCreate }
    },
    {
        icon: AiOutlineBell,
        text: "Reminders",
        id: shortid.generate(),
        path: "/reminders",
        exact: true,
        component: { Reminders }
    },
    {
        icon: BsPencil,
        text: "Edit labels",
        id: shortid.generate(),
        path: "/edit_labels",
        exact: true,
        component: { EditLabels }
    },
    {
        icon: RiInboxArchiveLine,
        text: "Archive",
        id: shortid.generate(),
        path: "/archives",
        exact: true,
        component: { Archives }
    },
    {
        icon: BiTrash,
        text: "Trash",
        id: shortid.generate(),
        path: "/trash",
        exact: true,
        component: { DeletedNotes }
    }
]

const Sidebar = ({ sidebarClick }) => {

    const [active, setActive] = useState(navigation[0].id)

    return (
        <Router>
            <Switch>
                {navigation.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
            <Box paddingBottom="270px" width={sidebarClick ? "60px" : "250px"}>
                {navigation.map((item) => {
                    return (
                        <NavItem
                            link={item.path}
                            key={item.id}
                            id={item.id}
                            active={active}
                            setActive={setActive}
                            icon={item.icon}
                            text={item.text}
                            sidebarClick={sidebarClick} />
                    )
                })}
                
            </Box>
        </Router>

    );
}

export default Sidebar;