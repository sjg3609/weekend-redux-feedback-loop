import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";
import { Button, TextField } from '@mui/material';
import ProgressBar from "../ProgressBar/ProgressBar";

function StepThree() {

    const dispatch = useDispatch();
    const history = useHistory();
    const support = useSelector(store => store.support);

    const handleChange = (event) => {
        const action = { type: 'SET_SUPPORT', payload: event.target.value}
        dispatch(action);

    }

    const nextPage = (event) => {
        event.preventDefault();
        if (support > 0) {
            return history.push('/step-four');
        } else {
            alert('Support must be greater than 0!');
        }
    }

    const previousPage = () => {
        history.push('/step-two');
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <ProgressBar currentStep={2} />
            <h2>How well are you being supported?</h2>
            <form onSubmit={nextPage}>
                <TextField variant="standard" type="number" value={support} onChange={handleChange}/>
                {'       '}
                <Button variant ="contained" type="submit">Next</Button> 
            </form>
            <br />
            <Button variant="contained" onClick={previousPage}>Back</Button>
        </>
    )
}

export default StepThree;