import {
    Box, FormControl,
    Flex, Icon, Textarea, Button, Text
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BiBellPlus, BiArchiveIn, BiImageAdd, BiUndo, BiRedo } from 'react-icons/bi'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { VscSymbolColor } from 'react-icons/vsc'
import shortid from "shortid";
import { useDispatch } from 'react-redux'
import { notesThrash } from '../../store/actions'

// getting data from localstorage
const getAllnotes = () => {
    let allNotes = localStorage.getItem('allNotes')
    console.log(allNotes);
    if (allNotes) {
        return JSON.parse(localStorage.getItem('allNotes'))
    } else {
        return []
    }
}

const NoteCreate = () => {

    const dispatch = useDispatch()

    const [notes, setNotes] = useState({
        title: '',
        note: '',
        id: shortid.generate()
    })
    const [allNotes, setAllNotes] = useState(getAllnotes())

    const [deleteNotes, setDeleteNotes] = useState([])

    const handleSubmit = (e) => {
        setNotes({
            ...notes,
            [e.target.name]: e.target.value
        })
    }

    const addNotes = (e) => {
        if (notes.title === '' || notes.note === '') return
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
        const notesClear = allNotes.filter(item => item.id !== note.id)
        setAllNotes(notesClear)
    }
    useEffect(() => {
        // storing input userInformation
        localStorage.setItem("allNotes", JSON.stringify(allNotes))
    }, [allNotes])

    const hoverStyle = {
        padding: "8px",
        cursor: "pointer",
        fontSize: "32px",
        marginLeft: "15px"
    }
    return (
        <Box w="1700px" onBlur={addNotes}>
            <Box w="500px" bg="transparent" ml="160px" mt="5%">
                <FormControl id="note-area" border="1px solid #525355" borderRadius="5px">
                    <Textarea value={notes.title} onChange={handleSubmit} name="title" className="title" px="20px" type="text" placeholder="Title" border="none" _focus={{ boxShadow: "none" }} />
                    <Textarea value={notes.note} onChange={handleSubmit} name="note" className="note" px="20px" type="text" placeholder="take a note" border="none" _focus={{ boxShadow: "none" }} />
                    {/* <Button onClick={addNotes} color="#000">Keep Note</Button> */}
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
            <Box ml="9%" >
                <Flex flexWrap="wrap" flexDirection="row" w="34%">
                    {allNotes.map((note) => {
                        return (
                            <Box width="100%" border="1px solid #525355" p="10px" m="10px" borderRadius="5px" >
                                <Text fontSize="2xl">{note.title}</Text>
                                <Text my="10px" fontSize="1xl">{note.note}</Text>
                                <Button onClick={() => {
                                    sendTothrash(note)
                                    dispatch(notesThrash(note))
                                }} color="#000">Move to Thrash</Button>
                            </Box>
                        )
                    })}
                </Flex>
            </Box>
        </Box>


    );
}

export default NoteCreate;