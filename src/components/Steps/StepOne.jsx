import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

function StepOne() {


    const history = useHistory();
    const dispatch = useDispatch();
    const feeling = useSelector(store => store.feeling);

    const handleChange = (event) => {
        const action = { type: 'SET_FEELING', payload: event.target.value};
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if (feeling > 0) {
            return history.push('/step-two');
        } else { 
            alert('Feeling must be greater than 0.');
        }
    }

    const previousPage = () => {
        return history.push('/')
    }


    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <h2>How are you feeling today?</h2>
            <form onSubmit={nextPage}>
                <TextField variant="standard" type="number" value={feeling} onChange={handleChange}/>
                {'       '}
                <Button variant ="contained" type="submit">Next</Button> 
            </form>
            <br />
            <Button variant="contained" onClick={previousPage}>Back</Button>
        </div>
    )
}

export default StepOne;