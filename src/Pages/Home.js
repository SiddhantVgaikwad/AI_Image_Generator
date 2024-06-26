import React from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/imgCard';


const Container = styled.div`
height:100%;
overflow-y:scroll;
background : ${({theme}) => theme.bg}
padding: 30px 30px;
padding_bottom: 50px;
display:flex;
flex-direction:column;
align-item:center;
gap:20px;
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
flex-direction:column;

@media (max-width:600px){
  font-size:22px;
}
`;


const Wrapper = styled.div`
width:100%;
max-width: 1400px;
padding:32px 0px;
display: flex;
justify-content: center;
`

const Span = styled.div`
font-size:30px;
font-weight:800;
color:${({theme}) => theme.secondary};
@media (max-width:600px){
  font-size:20px;
}
`

const CardWrapper = styled.div`
display: grid;
gap:20px;
@media(min-width:1200px){
  grid-template-column: repeat(4,1fr);

}
@media(min-width:640px) and (max-width:1199px){
  grid-template-column: repeat(4,1fr);
}
`;




function Home() {

  const item = {
    photo: "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg",
    author:"Sid",
    prompt:"hey prompt!",

  }
  return (
    <>
    <Container>
    <Headline>Explore popular posts in the Community!
    <Span>⦿ Generated with AI ⦿</Span>
    
    
    </Headline>
    <SearchBar/>
    <Wrapper>
      <CardWrapper>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
        <ImageCard item={item}/>
      </CardWrapper>
    </Wrapper>
    </Container>

    </>
  )
}

export default Home