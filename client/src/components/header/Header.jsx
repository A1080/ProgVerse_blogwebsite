import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import MyImage from './ProgVerse3.png';

const Component = styled(AppBar)`
  color: #000;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled('img')`
  width: 60px;
  height: 60px;
  border-radius: 40%;
`;

const LogoText = styled('span')`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const LinksContainer = styled('div')`
  display: flex;
`;

const LinkItem = styled(Link)`
  padding: 20px;
  color: #000;
  text-decoration: none;
  font-size: 22px;
  transition: color 0.3s ease;
  &:hover {
    color: #f9c233;
  }
`;

const Header = () => {
  return (
    <Component>
      <Container>
        <LogoContainer to="/">
          <LogoImage src={MyImage} alt="ProgVerse Logo" />
          <LogoText>ProgVerse</LogoText>
        </LogoContainer>
        <LinksContainer>
          <LinkItem to='/'>Home</LinkItem>
          <LinkItem to='/about'>About</LinkItem>
          <LinkItem to='/contact'>Contact</LinkItem>
          <LinkItem to='/login'>Logout</LinkItem>
        </LinksContainer>
      </Container>
    </Component>
  );
};

export default Header;
