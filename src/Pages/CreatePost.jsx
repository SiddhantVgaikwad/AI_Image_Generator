import React, { useState } from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../components/GenerateImageForm';
import GenerateImageCard from '../components/GenerateImageCard';

const Container = styled.div`
height:100%;
overflow-y:scroll;
background : ${({theme}) => theme.bg}
padding: 30px 30px;
padding_bottom: 50px;
display:flex;
flex-direction:column;
align-item:center;
gap:10pxpx;
@media (max-width:768px){
  padding:6px 10px;
}
`;

const Headline = styled.div`
font-size:34px;
font-weight:500;
color:${({theme}) => theme.text_Primary};
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;

@media (max-width:600px){
  font-size:22px;
}
`;
const Wrapper = styled.div`
height:fit-content;
width:100%;
gap:8%;
display: flex;
justify-content: center;
@media (max-width:768px){
  flex-direction:column;
}
`

function CreatePost() {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post,setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
    })
;  return (
  <Container><Wrapper>
    <GenerateImageForm post={post} setPost={setPost} 
    createPostLoading = {createPostLoading} 
    setCreatePostLoading = {setCreatePostLoading}
    generateImageLoading= {generateImageLoading}
    setGenerateImageLoading={setGenerateImageLoading}/>
    <GenerateImageCard  src={post?.photo} loading = {generateImageLoading}/>
    </Wrapper></Container>
   
  )
}

export default CreatePost;