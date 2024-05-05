import profilePic from './assets/images/ppmod.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Wan!</h2>
            <p className='card-text'>XD</p>
        </div>
    );
}

export default Card
