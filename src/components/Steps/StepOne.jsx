import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

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
    };

    console.log(feeling);

    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <h2>How are you feeling today?</h2>
            <form onSubmit={nextPage}>
                <input type="number" value={feeling} placeholder="Feeling" onChange={handleChange}/>
                <input type="submit"  placeholder="Next"/>
            </form>
        </div>
    )
}

export default StepOne;