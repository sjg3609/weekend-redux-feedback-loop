import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



function Review() {

    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const submitFeedback = () => {
        axios.post('/api/feelings', {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,
        }).then((response) => {
            console.log(response);
            history.push('/thank-you');
        }).catch((error) => {
            console.log(`Error in POST submitFeedback: ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Review Your Feedback!</h1>
            </header>
            <h3>Feeling: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <button onClick={submitFeedback}>Submit!</button>
        </>
    )
}

export default Review;