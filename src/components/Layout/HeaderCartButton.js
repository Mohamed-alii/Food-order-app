import { useContext , useEffect , useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce( ( currItemsNumber , item ) => {
        return currItemsNumber + item.amount;
    } , 0 );

    const buttonClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : '' }`;

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return
        }
        setbtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setbtnIsHighlighted(false)
        }, 300);

        return () => {
            clearInterval(timer)
        }
    }, [cartCtx.items])

    return (
        <button className={buttonClasses} onClick={props.onClick} >
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