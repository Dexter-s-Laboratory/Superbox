import {View, Image, Text} from 'react-native';
import {CardContainer} from './styles.js';
import {GlobalPrice} from '../../globalComponents/globalStyles.js'
const CartCard = ({product}) => {

  return (
    <CardContainer >
      <Image
        source={{uri: product.product_image}}
        style={{width: 50, height: 45, marginRight: 20}} />
      <Text style={{ marginRight: 20}}>{product.product_name}</Text>
      <GlobalPrice> ${product.product_price}</GlobalPrice>




    </CardContainer>
  )
}

export default CartCard;
