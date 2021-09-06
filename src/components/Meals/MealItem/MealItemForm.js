import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef , useState } from 'react';

const MealItemForm = props => {

    const amountInputRef = useRef();
    const [isValidInput , setIsValidInput] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = +amountInputRef.current.value;

        if(enteredAmount < 1 || enteredAmount > 5 || enteredAmount.toString().trim().length === 0){
            setIsValidInput(false);
            return;
        }

        props.onAddToCart(enteredAmount);
        
    };

    return (
        <form className={classes.form} onSubmit={submitHandler} >
            <Input label='Amount' ref={amountInputRef} input={ {
                id:'amount' + props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            } } />

            <button>+ Add</button>
            { !isValidInput && <p>Please enter a valid amount ( 1 - 5 )</p> }
        </form>
    )
}

export default MealItemForm;