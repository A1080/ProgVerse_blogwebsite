import { Box, TextareaAutosize, Button, styled } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useContext,useEffect} from "react";
import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";
import Comment from "./Comment";
const Container = styled(Box)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center; /* Align items both vertically and horizontally in the center */
`;

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px;
  width: 100%;
  margin: 0 20px;
`;

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  margin-top: 50px;
  border: 1px solid #878787;
  border-radius: 10px;
  padding: 5px;
  font-size: 24px;
  cursor: pointer;
`;
const StyledFavoriteIcon = styled(FavoriteIcon)`
  margin-top: 50px;
  border: 1px solid #878787;
  border-radius: 10px;
  padding: 5px;
  font-size: 24px;
  cursor: pointer;
`;

const StyledPersonIcon = styled(PersonIcon)`
  border: 2px solid #878787;
  border-radius: 30px;
  padding: 5px;
`;

const StyledButton = styled(Button)`
  width: auto;
  font-size: 14px;
`;

const initialValues = {
  name: '',
  postId: '',
  comments: '',
  date: new Date()
};

export const Comments = ({ post }) => {
  const [comment, setComment] = useState(initialValues);
// for storing the comments
const [comments,setComments]=useState([]);
const [toggle,setToggle]=useState(false);
  const { account } = useContext(DataContext);
  const [liked, setLiked] = useState(false);

  useEffect(()=>{
    const getData= async ()=>{
        const response=await API.getAllComments(post._id);
        if(response.isSuccess){
            setComments(response.data);
        }
    }
    getData();
  },[post,toggle])

  const handleCommentChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value
    });
  };

  const handleLikeToggle = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const addComment=async(e)=>{
    let response = await API.newComment(comment);
    if(response.isSuccess){
        setComment(initialValues);
    }
    setToggle(prevState=>!prevState);
  }

  return (
    <Box>
      <Box>
        <Container>
          {liked ? (
            <StyledFavoriteIcon onClick={handleLikeToggle} />
          ) : (
            <StyledFavoriteBorderIcon onClick={handleLikeToggle} />
          )}
        </Container>
      </Box>

      <Container>
        <StyledPersonIcon />
        <StyledTextArea
          minRows={5}
          placeholder="Spill your coder thoughts!"
          value={comment.comments}
          onChange={handleCommentChange}
        />
        <StyledButton variant="contained" color="primary" onClick={(e)=>addComment(e)}>
          Post
        </StyledButton>
      </Container>

      <Box>

        {
            comments && comments.length >0 && comments.map(comment=>(
                <Comment comment={comment} setToggle={setToggle}/>
            ))
        }
      </Box>
    </Box>
  );
};

export default Comments;
