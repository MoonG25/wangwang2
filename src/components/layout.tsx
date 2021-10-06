import './layout.css';
import Header from './header';

const Layout: React.FC = (props) => {
  return (
    <div>
      <Header name={'CGV'} />
      <main>
        {props.children}
      </main>
    </div>
  )
};

export default Layout;