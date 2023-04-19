import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function StepOne() {


    const history = useHistory();
    const feeling = useSelector(store => store.feeling);

    const nextPage = (event) => {
        event.preventDefault();
        if (feeling > 0) {
            return history.push('/step-two');
        } else { 
            alert('Feeling must be greater than 0.');
        }
    }

    return (
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
            </header>
            <h2>How are you feeling today?</h2>
            <form onSubmit={nextPage}>
                <input type="number" placeholder="Feeling"/>
                <input type="submit"  placeholder="Next"/>
            </form>
        </div>
    )
}

export default StepOne;