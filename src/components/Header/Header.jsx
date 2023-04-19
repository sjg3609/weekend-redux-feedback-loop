import { useHistory } from 'react-router-dom';


function Header() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/step-one');
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
                <button onClick={nextPage}>Begin!</button>
            </header>
        </>
    )
}

export default Header;