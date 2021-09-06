import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    console.log(cartCtx.items)

    const numberOfCartItems = cartCtx.items.reduce( ( currItemsNumber , item ) => {
        return currItemsNumber + item.amount;
    } , 0 );

    return (
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >your cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;