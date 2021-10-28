import ReactSlider from "react-slider";
import SettingsContext from "./SettingsContext";
import {useContext} from "react"
import BackButton from "./BackButton"
import Link from 'next/link' 
import { SingleLinks } from 'data/singleLinks'

function Settings() {
    //
    const settingsInfo = useContext(SettingsContext);
    const { home, hoursTracker, login } = SingleLinks
    ////
    return (
        <div className="m-auto text-left ">

            <header className="w-screen text-white font-semibold  items-center h-12 bg-black">
                <nav className="h-full flex justify-between content-center mx-2">
                    <button 
                        className="text-xl border-white border rounded px-3 self-center" 
                        onClick={ () => history.back() }
                    >
                        Back
                    </button>
                    <h1 className="text-xl self-center">Timer Settings</h1>
                    <Link href={ home }>
                        <a className="text-xl w-20 border-white border rounded px-3 self-center">Home</a>
                    </Link>
                </nav>
            </header>

            <div className="mx-5">
            
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

            </div>
            
            <div className="text-center mt-10">
                <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
            </div>

            <footer className="fixed bottom-0 flex w-screen text-white font-semibold text-xl items-center h-12 bg-black">
                <nav className="w-full flex justify-between mx-2 lg:mx-8">
                <Link href={ hoursTracker }>
                    <a className="self-center w-20 border-white border px-2 rounded">Tracker</a>
                </Link>
                <Link href={ login }>
                    <a className="self-center w-20 border-white border px-2 rounded">Logout</a>
                </Link>
                </nav>
            </footer>
        </div>
    )
}

export default Settings