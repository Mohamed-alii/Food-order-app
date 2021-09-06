import { useContext } from 'react/cjs/react.development';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (enteredAmount) => {
        cartCtx.addItem({
            id: props.id,
            name :props.name,
            description: props.description,
            price: props.price ,
            amount: enteredAmount
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <div>{props.name}</div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>

        </li>
    )
}

export default MealItem;