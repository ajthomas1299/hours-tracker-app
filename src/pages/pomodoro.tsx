import { useState } from "react";
import Layout from "components/layout/Layout";
import Pomodoro from "components/webPages/pomodoro/Pomodoro";
import Settings from "components/webPages/pomodoro/Settings";
import SettingsContext from 'components/webPages/pomodoro/SettingsContext';

const pomodoro = () => {
  //
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [workMinutes, setWorkMinutes] = useState<number>(25);
  const [breakMinutes, setBreakMinutes] = useState<number>(5);
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
