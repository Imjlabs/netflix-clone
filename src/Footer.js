import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-boxes">

                    <div className="footer-box">
                        <a href="#">Description audio</a>
                        <a href="#">Confidentialité</a>
                        <a href="#">Contactez nous</a>
                    </div>

                    <div className="footer-box">
                        <a href="#">Centre d'aide</a>
                        <a href="#">Recrutement</a>
                        <a href="#">Mentions Légales</a>
                    </div>

                    <div className="footer-box">
                        <a href="#">Carte Cadeau</a>
                        <a href="#">Magasin netflix</a>
                        <a href="#">Préférences de cookies</a>

                    </div>

                    <div className="footer-box">
                        <a href="#">Conditions d'utilisation</a>
                        <a href="#">Information de l'entreprise</a>
                    </div>

                </div>


                <div className="button-box">
                    <div >
                    <span className="footer-name">Site créer par Jordan RAPHAEL</span>
                    </div>
                    
                </div>

            </div>



        </div>
    );
}

export default Footer;