import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';



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



    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={nextPage}>
                <input type="text" value={comments} onChange={handleChange} />
                <input type="submit" value="Next" />
            </form>
        </>
    )
}

export default StepFour;