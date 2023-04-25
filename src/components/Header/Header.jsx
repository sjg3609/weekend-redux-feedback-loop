import { useHistory } from 'react-router-dom';
import { Button, styled } from '@mui/material';


function Header() {

    const history = useHistory();

    const nextPage = () => {
        history.push('/step-one');
    }

    // const ColorButton = styled(Button)(({ theme }) => ({
    //     color: theme.palette
    //   }));

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
                <Button variant="contained" onClick={nextPage}>Begin!</Button>
            </header>
        </>
    )
}

export default Header;