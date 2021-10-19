import Layout from "components/layout/Layout";
import Pomodoro from "components/webPages/pomodoro/Pomodoro";
import Settings from "components/webPages/pomodoro/Settings";
import {useState} from "react";
import SettingsContext from 'components/webPages/pomodoro/SettingsContext';

const pomodoro = () => {
  //
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  // const [exerciseMinutes, setExerciseMinutes] = useState( 1);
  // const [selectedAlarm, setSelectedAlarm] = useState("Alarm2");

  ////
  return (

    <Layout
      title="Pomodoro Timer | TrackerApp"
      description="Timer that helps you to stay productive."
      ogImage=""
      url=""
      showHeader={ true }
      showFooter={ true } 
    >
      
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Pomodoro />}
      </SettingsContext.Provider>

    </Layout>
  )
}

export default pomodoro
