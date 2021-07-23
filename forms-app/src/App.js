import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { AdminAgtAppointPage } from './pages/AdminAgtAppointPage';
import { LeadIntakePage } from './pages/LeadIntakePage';
import { CoveragesPage } from './pages/CoveragesPage';
import { RegionsPage } from './pages/RegionsPage';
import { MessageBox } from './components/MessageBox';
import { MenuBar } from './components/MenuBar';
import {LeadIntakeTablePage1} from "./pages/LeadIntakeTablePage1";
import { LeadIntakePage1 } from './pages/LeadIntakePage1';
import { AdminLeadIntakePage } from './pages/AdminLeadIntakePage';
import { AgtAppointPage } from "./pages/AgtAppointPage";


const pages = [
  { id: 1, to: "/home", label: "Home", component: HomePage },
  { id: 2, to: "/leadintake", label: "Lead Intake", component: LeadIntakePage },
  { id: 3, to: "/coverages", label: "Coverages", component: CoveragesPage },
  { id: 4, to: "/regions", label: "Regions", component: RegionsPage },
  { id: 5, to: "/leadIntakeTable", component: LeadIntakeTablePage1},
  { id: 6, to: "/leadIntakeFormOne", label: "Small Commercial Lead Intake Form", component: LeadIntakePage1 },
  { id: 7, to: "/appoinments", label: "Agent Appointments", component: AgtAppointPage },
  { id: 8, to: "/admin", label: "Admin", component: AdminPage },
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
          <main id="content" className="col-md-8">
            <Switch>
              {pages.map(page =>
                <Route key={page.id} path={page.to} component={page.component} />)}
              <Route path="/adminAgtAppoint">
                <AdminAgtAppointPage />
              </Route>
              <Route path="/adminLeadIntake">
                <AdminLeadIntakePage/>
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </main>
          <aside id="sidebar" className="col-md-4">
            <MessageBox headerText="Program Resources">
                <p>​Have questions? Click {' '}
                  <a href="https&#58;//liberty.verinthms.com/GTConnect/UnifiedAcceptor/LMAuthDesktop.Main/session34613841"
                    target="_blank" rel="noreferrer" >here</a>
                  {' '} to learn more about the program and small business appetite.
                </p>
            </MessageBox>
            <MessageBox headerText="​Small Business Appetite Guide">
              Some content
            </MessageBox>
          </aside>
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
