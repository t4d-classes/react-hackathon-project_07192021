import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
<<<<<<< HEAD
import { AdminAgtAppointPage } from './pages/AdminAgtAppointPage';
=======
import { LeadIntakePage } from './pages/LeadIntakePage';
>>>>>>> c43597cb950964a1c5cb961b56454085cae92e18
import { CoveragesPage } from './pages/CoveragesPage';
import { RegionsPage } from './pages/RegionsPage';
import { MenuBar } from './components/MenuBar';
import { AgtAppointPage } from './pages/AgtAppointPage';

const pages = [
  { id: 1, to: "/home", label: "Home", component: HomePage },
  { id: 2, to: "/leadintake", label: "Lead Intake", component: LeadIntakePage },
  { id: 3, to: "/coverages", label: "Coverages", component: CoveragesPage },
  { id: 4, to: "/regions", label: "Regions", component: RegionsPage },
<<<<<<< HEAD
  { id: 5, to: "/appoinments", label: "Agent Appointments", component: AgtAppointPage },
=======
  { id: 5, to: "/admin", label: "Admin", component: AdminPage },
>>>>>>> c43597cb950964a1c5cb961b56454085cae92e18
];

export const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <header id="page-header" className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src="/images/LMI_H_BLUE_RGB.png" alt="LM Logo" />
            </Link>
          </div>
          <MenuBar menuItems={pages} />
        </header>

        <div className="row">
          <main id="content" className="col-md-12">
            <Switch>
              {pages.map(page =>
                <Route key={page.id} path={page.to} component={page.component} />)}
              <Route path="/adminAgtAppoint">
                <AdminAgtAppointPage />
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </main>
        </div>
        <footer id="page-footer" className="row">
          <div className="col-md-12">
            <small>&copy; {new Date().getFullYear()} LM. All Rights Reserved.</small>
          </div>
        </footer>
      </div>
    </Router>
  );
}
