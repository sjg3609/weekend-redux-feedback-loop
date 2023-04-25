import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';


function Review() {

    const dispatch = useDispatch();
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const submitFeedback = () => {
        axios.post('/feedback', {
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

    const previousPage = () => {
        history.push('/step-four');
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Review Your Feedback!</h1>
            </header>
            <ProgressBar currentStep={4} />
            <h3>Feeling: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <Button variant="contained" onClick={previousPage}>Back</Button>
            <Button variant="contained" onClick={submitFeedback}>Submit!</Button>
        </>

    )
}

export default Review;