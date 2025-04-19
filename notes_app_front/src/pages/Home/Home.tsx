import { useNavigate } from "react-router-dom";
import "./Home.scss";
const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <h2>
                Bienvenue !<br />
                Parcourez vos notes, éditez-les, supprimez-les ou créez-en de
                nouvelles ! !
            </h2>
            <div>
                <button onClick={() => navigate("/notes-page")}>
                    Consultez vos notes
                </button>
            </div>
        </div>
    );
};

export default Home;
