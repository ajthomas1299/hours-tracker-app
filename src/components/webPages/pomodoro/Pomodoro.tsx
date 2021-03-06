import { useContext, useState, useEffect, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PauseButton from './pomodoroBtns/PauseButton'
import PlayButton from './pomodoroBtns/PlayButton'
import SettingsButton from './pomodoroBtns/SettingsButton'
import SettingsContext from './SettingsContext'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import { Links } from 'data/buttons/Buttons'

const red = '#75002d'
const green = '#0d8d40'

const Pomodoro = () => {
  const { reportsLink } = Links

    const settingsInfo = useContext(SettingsContext)
    const [isPaused, setIsPaused] = useState(true)
    const [mode, setMode] = useState('work') // work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0)
    // for functions used by the interval
    const secondsLeftRef = useRef(secondsLeft)
    const isPausedRef = useRef(isPaused)
    const modeRef = useRef(mode)

    const tick = () => {
        secondsLeftRef.current = secondsLeftRef.current - 1;
        setSecondsLeft(secondsLeftRef.current);
    }
   
    useEffect( () => {
        //
        const switchMode = () => {
            //
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes ) * 60;
            //
            setMode(nextMode);
            modeRef.current = nextMode;
            //
            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
            ////
        }
        // 
        // const alarmSound = new Audio("Alarm.mp3"); // does NOT work
        // const alarmSound = new Audio("./Alarm.mp3"); // does NOT work
        // const alarmSound = new Audio("https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"); // works
         const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm.mp3"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm2.wav"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm3.wav"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm4.wav"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm5.mp3"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm6.wav"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/Alarm7.mp3"); // works
        // const alarmSound = new Audio("https://spideywebdesigns.com/assets/sounds/pomodoro-times-up.mp3"); // works
        //
        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);
        //
        const interval = setInterval(() => {
            //
            if (isPausedRef.current) {
                return;
            }
            // check if the timer has reached 0
            if (secondsLeftRef.current === 0) {
                //
                //setIsPaused(true);
                // put beep/alarm in here
                alarmSound.play();
                //
                alarmSound.onended=function(){
                    switchMode();
                }
                //
                // return switchMode();
                return;

            }

            tick();

        }, 1000);

        return () => clearInterval(interval)

    }, [settingsInfo])

    const totalSeconds = mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60
  
    const percentage = Math.round(secondsLeft / totalSeconds * 100)
    let minutes: number | string = Math.floor(secondsLeft / 60)
    let seconds: number | string = secondsLeft % 60

    const zero = '0'
    if (seconds < 10 ) {
      seconds = `${zero}${seconds}`
    }

    if(minutes < 10) {
      minutes = `${zero}${minutes}`
    }

    ////
    return (
      <div className="h-screen flex flex-col">
        <Header>Pomodoro timer</Header>
          <div className="flex-1 mx-auto grid place-items-center w-64 text-center">
            <CircularProgressbar 
                value={percentage} 
                text={minutes + ':' + seconds} 
                styles={buildStyles({
                    textColor: '#464646',
                    textSize: '24px',
                    pathColor:mode === 'work' ? red : green,
                    trailColor: '959595',
                })}
            />
            <div className="text-center mt-8">
                    {isPaused ? 
                        <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false; }} /> 
                        : <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true; }} /> 
                    }
            </div>

            <div className="text-center mt-8">
                <SettingsButton 
                    onClick={() => settingsInfo.setShowSettings(true)} 
                />
            </div>
        </div>
        <Footer>{ reportsLink }</Footer>
      </div>
    )
}

export default Pomodoro
