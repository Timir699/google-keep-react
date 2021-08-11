import {
    Box, FormControl,
    Flex, Icon, Textarea, Button, Text
} from "@chakra-ui/react";
import { useState } from "react";
import { BiBellPlus, BiArchiveIn, BiImageAdd, BiUndo, BiRedo } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { VscSymbolColor } from 'react-icons/vsc'
import shortid from "shortid";

const NoteCreate = () => {

    const [notes, setNotes] = useState({
        title: '',
        note: '',
        id: shortid.generate()
    })
    const [allNotes, setAllNotes] = useState([])
    const [deleteNotes, setDeleteNotes] = useState([])
    const handleSubmit = (e) => {
        setNotes({
            ...notes,
            [e.target.name]: e.target.value
        })
        console.log(notes);
    }

    const addNotes = (e) => {
        if (notes.title === '' && notes.note === '') return
        e.preventDefault()
        setAllNotes([...allNotes, notes])
        setNotes({
            title: '',
            note: '',
            id: shortid.generate()
        })
    }
    const sendTothrash = (note) => {
        setDeleteNotes([...deleteNotes, note])
        const notesClear = allNotes.filter((item) => item.id !== note.id)
        setAllNotes(notesClear)
        console.log(deleteNotes);
    }

    const hoverStyle = {
        padding: "8px",
        cursor: "pointer",
        fontSize: "32px",
        marginLeft: "15px"
    }
    console.log(allNotes);

    return (
        <Box>
            <Box bg="transparent" ml="160px" mt="5%">
                <FormControl id="note-area" border="1px solid #525355" borderRadius="5px">
                    <Textarea value={notes.title} onChange={handleSubmit} name="title" className="title" px="20px" type="text" placeholder="Title" border="none" _focus={{ boxShadow: "none" }} />
                    <Textarea value={notes.note} onChange={handleSubmit} name="note" className="note" px="20px" type="text" placeholder="take a note" border="none" _focus={{ boxShadow: "none" }} />
                    <Button onClick={addNotes} color="#000">Keep Note</Button>
                    <Flex p="10px 0px 15px 0px" >
                        <Icon
                            as={BiBellPlus}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={AiOutlineUserAdd}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={VscSymbolColor}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={BiImageAdd}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={BiArchiveIn}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={BsThreeDotsVertical}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={BiUndo}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                        <Icon
                            as={BiRedo}
                            {...hoverStyle}
                            _hover={{ bg: "rgba(232, 234, 237, 0.08)", borderRadius: "20px" }} />
                    </Flex>
                </FormControl>
            </Box>
            <Box ml="20%" >
                <Flex flexWrap="wrap" flexDirection="column">
                    {allNotes.map((note) => {
                        return (
                            <Box border="1px solid #525355" p="10px" m="10px" borderRadius="5px" >
                                <Text fontSize="2xl">{note.title}</Text>
                                <Text fontSize="3xl">{note.note}</Text>
                                <Button onClick={() => sendTothrash(note)} color="#000" >Delete</Button>
                            </Box>
                        )
                    })}
                </Flex>
            </Box>
        </Box>


    );
}

export default NoteCreate;