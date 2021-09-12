import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useSelector, useDispatch } from "react-redux"
import { notesDelete } from '../../store/actions'

const DeletedNotes = () => {
    const trashData = useSelector(state => state.trashData)
    const dispatch = useDispatch()


    return (
        <Box w="1700px" ml="160px">
            <Text display={trashData.length === 0 ? "block" : "none"} fontSize="2xl">trash is empty</Text>
            {trashData.map((note) => {
                return (
                    <Box w="30%" border="1px solid #525355" p="10px" m="10px" borderRadius="5px" >
                        <Text fontSize="2xl">{note?.title}</Text>
                        <Text my="10px" fontSize="1xl">{note?.note}</Text>
                        <Button onClick={() => dispatch(notesDelete(note))} color="red">Delete</Button>
                    </Box>
                )
            })}
        </Box>
    );

}

export default DeletedNotes;