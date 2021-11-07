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
               <a className="">Home</a>
             </Link>,
   reportsLink: <Link href={ reports }>
                  <a className="">Report</a>
                </Link>,
   loginLink: <Link href={ login }>
                <a className="">Log out</a>
              </Link>, 
   pomodoroLink: <Link href={ pomodoro }>
                <a className="">Pomodoro</a>
              </Link>,
   hoursTrackerLink: <Link href={ hoursTracker }>
                <a className="">Hours Tracker</a>
              </Link>,
   viewSessionsLink: <Link href={ viewSessions }>
                <a className="">Sessions</a>
              </Link>,
 }

 export const Buttons: IButtons = {
   backBtn: <button className="uppercase text-sm md:text-2xl mdl:text-2xl px-3 md:p-1 md:px-5 border-white border rounded flex self-center" 
              onClick={ () => history.back() }>Back</button>
 }
  