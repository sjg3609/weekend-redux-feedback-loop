import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function ThankYou() {

    const dispatch = useDispatch();
    const history = useHistory();

    const submitNewFeedback = () => {
        const action = { type: 'CLEAR_FORMS' }
        dispatch(action);
        history.push('/');
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Thank you!</h1>
            </header>
            <button onClick={submitNewFeedback}>Submit New Feedback</button>
        </>
    )
}

export default ThankYou;