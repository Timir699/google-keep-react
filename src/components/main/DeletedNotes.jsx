import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useSelector, useDispatch } from "react-redux"
import { notesDelete } from '../../store/actions'

const DeletedNotes = () => {

    const trashData = useSelector(state => state.trashData)
    console.log(trashData);
    const dispatch = useDispatch()

    return (
        <Box ml="160px">
            {trashData.map((note) => {
                return (
                    <Box border="1px solid #525355" p="10px" m="10px" borderRadius="5px" >
                        <Text fontSize="2xl">{note.title}</Text>
                        <Text my="10px" fontSize="1xl">{note.note}</Text>
                        <Button onClick={() => dispatch(notesDelete(note))} color="red">Delete</Button>
                    </Box>
                )
            })}
        </Box>
    );
}

export default DeletedNotes;