import Footer from "../../Components/Footer/Footer";
import "./Profile.css";
import userData from "../../../public/profiledata";

function getRandomDaten(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

const Profile = () => {

    const randomProfile = getRandomDaten(userData);
    console.log(userData);
    return (
        <section className="profile-container">
            <div className="profile-t-container">
                <h2 className="profile-title">DEIN PROFIL</h2>
            </div> 
            <div className="balken"></div>
            <div className="profile-info">
                <div className="img-flex">
                    <img className="profile-img" src={randomProfile.profile_img} alt="PROFILE PICTURE" />
                </div>
                <br />
                <br />
                <div className="info-cont">
                    <p className="info-title">Vorname</p>
                    <p className="info-text">{randomProfile.vorname}</p>
                </div>
                <br />
                <div className="info-cont">
                    <p className="info-title">Nachname</p>
                    <p className="info-text">{randomProfile.nachname}</p>
                </div>
                <br />
                <div className="info-cont">
                    <p className="info-title">Straße</p>
                    <p className="info-text">{randomProfile.strasse}</p>
                </div>
                <br />
                <div className="info-cont">
                    <p className="info-title">Postleitzahl</p>
                    <p className="info-text">{randomProfile.postleitzahl}</p>  
                </div>
                <br />
                <div className="info-cont">
                    <p className="info-title">Wohnort</p>
                    <p className="info-text">{randomProfile.wohnort}</p>
                </div>
                <br />
                <div className="info-cont">
                    <p className="info-title">E-Mail Adressse</p>
                    <p className="info-text">{randomProfile.email}</p>
                </div>
                <br />
            </div>
            <Footer/>
        </section>
    );
}
 
export default Profile;