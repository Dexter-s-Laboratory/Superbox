import {useState} from "react";
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import styled from 'styled-components/native'
import CartCard from './CartCard.js';
import {Container, ItemNumberContainer, CartInfoContainer, SubTotalContainer} from './styles.js';
import {GlobalView, GlobalTitle, GlobalParagraph, GlobalPrice, GlobalButton} from '../../globalComponents/globalStyles.js';

const CartPage = () => {

  const[products, setProducts] = useState([
    {product_id: 1, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 2, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 3, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 4, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"},
    {product_id: 5, product_name: "Spiderman", product_price: "200", product_image:'https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/63863d142d94e/clean.jpg', product_description: "Great condition spiderman comic", product_quantity: "4"}

  ]);

  const calculateTotal = () => {
    return products.reduce((accu,product) => accu + Number(product.product_price),  0)
  }

  return (
    <GlobalView>

      <Container>

        <ItemNumberContainer>
          <GlobalTitle>
            Your Cart has {products.length} {products.length === 1 ? 'Item': 'Items'}
          </GlobalTitle>
        </ItemNumberContainer>
        <CartInfoContainer>
          {products.map(product => <CartCard key={product.product_id} product={product}/>)}
        </CartInfoContainer>
        <SubTotalContainer>
          <GlobalPrice>Subtotal: ${calculateTotal()}</GlobalPrice>
          <GlobalButton
          title="Checkout"
          onPress={() => Alert.alert('Payment confirmed! Your items are on their way!')}
        />
        </SubTotalContainer>
      </Container>
    </GlobalView>
  )
}
export default CartPage;