import { useContext } from "react";
import { Box, Typography,styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";
const Component=styled(Box)`
    margin-top:40px;
    background:#f5f5f5;
    padding:20px;
`
const Container=styled(Box)`
    display:flex;
    margin-bottom:5px;
`
const Name=styled(Typography)`
    font-weight:600;
    font-size:18px;
    margin-right:20px;
`
const StyledDate=styled(Typography)`
    color:#888773;
    font-size:14px;
`
const DeleteIcon=styled(Delete)`
    margin-left:auto;
`
const Comment=({comment,setToggle})=>{
    const {account}=useContext(DataContext);

    const removeComment=async()=>{
        let response=await API.deleteComment(comment._id);
        if(response.isSuccess){
            setToggle(prevState=>!prevState);
        }
    }
    return(
        // <div>this is comment</div>
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                {comment.name===account.username && <DeleteIcon onClick={()=>removeComment()}/>}
            </Container>
            <Box>
                <Typography>{comment.comments}</Typography>
            </Box>
        </Component>
    )
}

export default Comment;