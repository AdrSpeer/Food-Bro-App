import Footer from "../../Components/Footer/Footer";
import "./Profile.css";

const Profile = () => {
    return (
        <section className="profile-container">
            <div className="profile-t-container">
            <h2 className="profile-title">DEIN PROFIL</h2>
            </div> 
            <div className="balken"></div>
            <Footer/>
        </section>
    );
}
 
export default Profile;