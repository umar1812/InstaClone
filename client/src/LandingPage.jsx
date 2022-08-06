import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <header className='lhead'>Landing Page</header>
            <div className='landing'>
                <img className='lpImage' src="./Images/landing.jpg" alt="by Jimmy Woo" />
                <span className='lspan'><h3 className='lh3'>10X Team 04</h3>
                    <br /><button className='lbutton' onClick={() => {
                        navigate('/postView')
                    }}>Enter</button></span>
            </div>
        </>
    )
}

export default LandingPage