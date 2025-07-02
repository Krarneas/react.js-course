import profilePic from './assets/saulon-200px.png'

function Card(){

    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Krarneas Aqua</h2>
            <p className="card-info">I'm a second year BS Computer Science student. I do graphic and layout design.</p>
        </div>
    );
}

export default Card