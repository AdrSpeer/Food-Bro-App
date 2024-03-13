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
                <img src="#" alt="PROFILE PICTURE" />
                <p>Vorname: {randomProfile.vorname}</p>
                <p>Nachname: {randomProfile.nachname}</p>
                <p>Adresse: {randomProfile.strasse}, {randomProfile.postleitzahl} {randomProfile.wohnort}</p>
            </div>
            <Footer/>
        </section>
    );
}
 
export default Profile;