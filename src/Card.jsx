import profilePic from './assets/images/ppmod.jpg'
import Pic from './assets/images/PP.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={Pic} alt="profile picture"></img>
            <h2 className='card-title'>Wan!</h2>
            <p className='card-text'>XD</p>
        </div>
    );
}

export default Card
