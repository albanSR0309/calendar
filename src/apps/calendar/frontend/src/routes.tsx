import {Login} from './Users/components/Login';
import {SignUp} from './Users/components/SignUp';
import {AppointmentsSummary} from './Appointments/components/AppointmentsSummary';
import Calendar from './Calendar';
import {Hero} from './shared/components/Hero';

export const routes = [
  {path: '/', component: Hero},
  {path: '/login', component: Login},
  {path: '/sign-up', component: SignUp},
  {path: '/calendar', component: Calendar},
  {path: '/summary', component: AppointmentsSummary}
];
