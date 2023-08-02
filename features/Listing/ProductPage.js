import React from "react";
import styled from 'styled-components/native'
import { Text, View, Image, Pressable } from 'react-native';
import { GlobalView, GlobalPrice, GlobalTitle, GlobalParagraph, GlobalButton, GlobalButtonText } from  '../../globalComponents/globalStyles.js';
import ProductCard from "../../globalComponents/ProductCard.js"

const Product = () => {

const CardSizer = styled.View`
align-items: center;
justify-content: center;
margin-bottom: 50px;
height: 95%;
width: 95%;
`;

  return (
    <GlobalView>

      <CardSizer>
        <ProductCard />
         <GlobalButton>
          <GlobalButtonText>Add to Cart</GlobalButtonText>
         </GlobalButton>
      </CardSizer>

    </GlobalView>
  )
}
export default Product;