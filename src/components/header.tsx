import './header.css';

type Props = {
  name: string;
};
const Header: React.FC<Props> = (props) => {
  return (
    <header>
      {props.name}
    </header>
  )
};

export default Header;