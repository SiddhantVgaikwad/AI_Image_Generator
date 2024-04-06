import styled from 'styled-components';
import Button from './button';
import TextInput from './TextInput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';

const Form  = styled.div`
flex:1;
padding: 16px 20px;
display:flex;
flex-direction:column;
gap:9%
justify-content: center`;

const Top  = styled.div`
display:flex;
flex-direction:column;
gap:6px;
`;

const Title  = styled.div`
font-size:28px;
font-weight:500;
color:${({theme}) => theme.text_primary};
`;

const Desc  = styled.div`
font-size:17px;
font-weight:400;
color:${({theme}) => theme.text_secondary};
`;

const Body  = styled.div`
display:flex;
flex-direction: column;
gap:18px;
font-size:12px;
font-weight:400;
color:${({theme}) => theme.text_secondary}
`;

const Action  = styled.div`
flex:1;
display:flex;
gap: 8px;
`;

function GenerateImageForm({ post, setPost,
    createPostLoading , 
    setCreatePostLoading, 
    generateImageLoading,
    setGenerateImageLoading}) {

        const generateImageFun = () => {
           setGenerateImageLoading(true); 
        };
        const createPostFun = () => {
            setCreatePostLoading(true);
         }
   
  return (
    <Form>
        <Top>
            <Title>Generate Image with Prompt</Title>
            <Desc> write your prompt according to the image you want to Generate</Desc>
        </Top>

        ** You can Post the AI Generated Image to the Community** 
        <Body>
            <TextInput 
            label="Author"
            placeholder="Enter your name" name= "name"
            value={post.name}
            handelChange={(e) =>setPost({...post,name: e.target.value}) }
            />
            <TextInput 
            label="prompt"
            placeholder="write a detailed prompt about image you generate" name= "name"
            rows="8" textArea
            value={post.prompt}
            handelChange={(e) =>setPost({...post,prompt: e.target.value}) }
            />
        </Body>
        <Action>
               <Button text="Generate Image" flex leftIcon={<AutoAwesome/>}
               isLoading={generateImageLoading}
               isDisabled={post.prompt === ""}
               onClick={() =>generateImageFun() }
               />
               <Button text="Post Image" type="secondary" flex leftIcon={<CreateRounded/>}
               isLoading={createPostLoading}
               isDisabled={post.name==="" || post.prompt === "" || post.photo === ""}
               onClick={() => createPostFun()}
               />
            </Action>
    </Form>
  )
}

export default GenerateImageForm