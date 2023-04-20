import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function StepTwo() {

    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        const action = { type: 'SET_UNDERSTANDING', payload: event.target.value };
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if (understanding > 0 ) {
            return history.push('/step-three');
        } else {
            alert('Understanding much be greater than 0!');
        }
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={nextPage}>
                <input type="number" onChange={handleChange} value={understanding} />
                <input type="Submit" value="Next" />
            </form>
        </>
    )
}

export default StepTwo;