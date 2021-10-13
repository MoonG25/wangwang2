import './layout.css';
import Header from './header';
import Ads from './ads';

const Layout: React.FC = (props) => {
  return (
    <div>
      <Ads />
      <Header name={'CGV'} />
      <main>
        {props.children}
      </main>
    </div>
  )
};

export default Layout;