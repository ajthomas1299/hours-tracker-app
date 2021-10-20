import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./BackButton";

function Settings() {
    //
    const settingsInfo = useContext(SettingsContext);

    ////
    return (
        <div className="m-auto w-300 text-left mt-24">
            
            <label>work minutes: {settingsInfo.workMinutes}:00</label>
            <ReactSlider 
                className={'slider'}    
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />

            <label>break minutes: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider 
                className={'slider green'}    
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            
            <div className="text-center mt-10">
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>
        </div>
    )
}

export default Settings