import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ProspectivePage } from './pages/ProspectivePage';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { LeadIntakePage } from './pages/LeadIntakePage';
import { CoveragesPage } from './pages/CoveragesPage';
import { RegionsPage } from './pages/RegionsPage';
import { MessageBox } from './components/MessageBox';
import { MenuBar } from './components/MenuBar';

const pages = [
  { id: 1, to: "/home", label: "Home", component: HomePage },
  { id: 2, to: "/leadintake", label: "Lead Intake", component: LeadIntakePage },
  { id: 3, to: "/coverages", label: "Coverages", component: CoveragesPage },
  { id: 4, to: "/regions", label: "Regions", component: RegionsPage },
  { id: 5, to: "/admin", label: "Admin", component: AdminPage },
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
          
        </header>
        <div className="row">
          <main id="content" className="col-md-8">
            <Switch>
              {pages.map(page =>
                <Route key={page.id} path={page.to} component={page.component} />)}
              <Route path="/" exact>
              <ProspectivePage />
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
