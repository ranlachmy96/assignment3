import FamilyPicture from './assets/familypicture.png';
import HeaderButtons from './components/HeaderButtons';
import './App.css'

function App() {

    return (
        <div id="mainPageContainer">
            <HeaderButtons></HeaderButtons>

            <div id="mainPageMiddlePartContainer">
                <div id="mainPageTitlesContainer">
                    <h5>Healing Hearts, Healing Lives</h5>
                    <h1>Being Part Of Family Reunification Is A Way To Help</h1>
                </div>
                <div id="upperSideGreenContainer">
                    <div id="mainPageWhiteSquare">
                        <div id="familyPictureContainer">
                            <img src={FamilyPicture} alt="reunified family picture" title={"reunified family picture"}/>
                        </div>
                        <p className="familyPictureText">Family Reunification, for you it is just words for them it is
                            a <span>reality</span>!</p>
                    </div>
                    <div className="greenSquare"></div>

                </div>

            </div>
            <div id="lowerSideGreenContainer">
                <div className="greenRectangle">
                    <h2>130+</h2>
                    <span>yet to be Reunified with their families...</span>
                </div>
            </div>
        </div>
    );
}

export default App
