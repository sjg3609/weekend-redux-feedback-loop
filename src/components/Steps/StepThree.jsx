import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/";

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
            <h2>How well are you being supported?</h2>
            <form onSubmit={nextPage}>
                <input type="number" value={support} onChange={handleChange} />
                <input type="submit" value='Next' />
            </form>
            <br />
            <button onClick={previousPage}>Back</button>
        </>
    )
}

export default StepThree;