import React from "react";
import styled from 'styled-components/native'
import { Text, View, Image, Button, ScrollView} from 'react-native';
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph, GlobalRating} from  '../globalComponents/globalStyles.js';

const ProductCard = () => {

  const ScrollContainer = styled.ScrollView`
  `;

  const AlignContainer = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  `

  const CardContainer = styled.View`
  flex-direction: row;
  height: 85%;
  max-height: 90%;
  `

  const Card = styled.View`
  width: 75%;
  align-items: center;
  justify-content: start;
  `;

  const ImgContainer = styled.View`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 40px;
  margin-top: 50px;
  justify-content: center;
  `;

  const ProductImg = styled.Image`
  height: 100%;
  width: 100%;
  `;

  const DescContainer = styled.View`
  align-items: center;
  margin-top: 10px;
  `;

  const PriceContainer = styled.View`
  align-items: center;
  margin-top: 5px;
  margin-bottom: 15px;
  `;


  return (

    <GlobalView>
      <ScrollContainer>
        <AlignContainer>
      <CardContainer>
      <Card>
        <ImgContainer>
        <ProductImg
          source={{
            uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-03/30/23/asset/c14c01274175/sub-buzz-532-1648681737-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
        }}
        />
        </ImgContainer>

        <GlobalTitle>The Amazing Spiderman</GlobalTitle>
        <DescContainer>
        <GlobalParagraph>50th Issue of The Amazing Spiderman</GlobalParagraph>
        </DescContainer>
        <PriceContainer>
        <GlobalPrice>$29.99</GlobalPrice>
        </PriceContainer>
        <GlobalRating>★★★★★</GlobalRating>
      </Card>
      </CardContainer>
      </AlignContainer>
      </ScrollContainer>
    </GlobalView>
  )
}

export default ProductCard;