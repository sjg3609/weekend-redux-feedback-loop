import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';



function StepFour() {

    const dispatch = useDispatch();
    const history = useHistory();

    const comments = useSelector(store => store.comments);

    const handleChange = (event) => {
        const action = { type: 'SET_COMMENTS', payload: event.target.value };
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
       history.push('/review');
    }

    const previousPage = () => {
        history.push('/step-three');
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={nextPage}>
                <TextField variant="standard" type="text" value={comments} onChange={handleChange} />
                {'          '}
                <Button type="submit" variant="contained">Next</Button>
            </form>
            <br />
            <Button variant ="contained" onClick={previousPage}>Back</Button>
        </>
    )
}

export default StepFour;