import profilePic from './assets/images/ppmod.jpg'
import jessPic from './assets/images/Jess.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={jessPic} alt="profile picture"></img>
            <h2 className='card-title'>Jessie</h2>
            <p className='card-text'>Feliz cumpleaños Jessie, que esta nueva etapa te traiga muchas aventuras y experiencias</p>
        </div>
    );
}

export default Card