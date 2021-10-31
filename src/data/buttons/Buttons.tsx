import { SingleLinks } from 'data/singleLinks'
import { 
  ILinks, 
  IButtons 
 } from 'models/buttons/buttons'
import Link from 'next/link' 

 const { home, reports, login, pomodoro, 
         hoursTracker, viewSessions } = SingleLinks

 export const Links: ILinks = {
   homeLink: <Link href={ home }>
               <a className="self-center border-white border px-3 rounded">Home</a>
             </Link>,
   reportsLink: <Link href={ reports }>
                  <a className="self-center border-white border px-3 rounded">Report</a>
                </Link>,
   loginLink: <Link href={ login }>
                <a className="self-center border-white border px-3 rounded">Log out</a>
              </Link>, 
   pomodoroLink: <Link href={ pomodoro }>
                <a className="self-center border-white border px-3 rounded">Pomodoro</a>
              </Link>,
   hoursTrackerLink: <Link href={ hoursTracker }>
                <a className="self-center border-white border px-3 rounded">Hours Tracker</a>
              </Link>,
   viewSessionsLink: <Link href={ viewSessions }>
                <a className="self-center border-white border px-3 rounded">Sessions</a>
              </Link>,
 }

 export const Buttons: IButtons = {
   backBtn: <button className="border-white border rounded uppercase px-3 self-center" 
              onClick={ () => history.back() }>Back</button>
 }
  