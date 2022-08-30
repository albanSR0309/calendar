import Home from "./Home";
import {Login} from "./Users/components/Login";
import {SignUp} from "./Users/components/SignUp";
import {AppointmentsSummary} from "./Appointments/components/AppointmentsSummary";
import Calendar from "./Calendar";

export const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/sign-up', component: SignUp},
  {path: '/calendar', component: Calendar},
  {path: '/summary', component: AppointmentsSummary}
]
