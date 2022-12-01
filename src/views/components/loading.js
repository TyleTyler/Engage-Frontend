import logo from './logo.png'

const Loading = () => {
    return ( <div className='loadingScreen'>
    <img src ={logo} className='loadingLogo' /> 
    <div className="loadingText"> Loading...</div>
    </div> );
}
 
export default Loading;