import React, { useState } from 'react';
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import {
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Logo from '@img/logo.svg';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function closeMenu() {
    setAnchorEl(null);
  }
  return (
    <Container alignItems={'center'}>
      <Content>
        <Link href={'/'} passHref>
          <Stack direction={'row'} alignItems={'center'} sx={{ ':hover': { cursor: 'pointer' } }}>
            <Logo />
            <DividerLine orientation="vertical" flexItem sx={{ ml: '20px', mr: '13px' }} />
            <TitleText variant={'h1'} sx={{ mr: '20px' }}>
              Devlog
            </TitleText>
          </Stack>
        </Link>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu open={isMenuOpen} onClose={closeMenu} anchorEl={anchorEl}>
              <Link href={'/'}>
                <NavButton onClick={closeMenu}>Posts</NavButton>
              </Link>
              <Link href={'/about'}>
                <NavButton onClick={closeMenu}>About</NavButton>
              </Link>
            </Menu>
          </>
        ) : (
          <Nav>
            <Link href={'/'}>
              <NavButton>Posts</NavButton>
            </Link>
            <Link href={'/about'}>
              <NavButton>About</NavButton>
            </Link>
          </Nav>
        )}
      </Content>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  paddingTop: '50px',
  paddingBottom: '30px',
}));

const Content = styled('header')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1024px',
  padding: '0 20px 0 20px',
  justifyContent: 'space-between',
}));

const DividerLine = styled(Divider)(({ theme }) => ({
  borderColor: '#F5F5F5',
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '40px',
  whiteSpace: 'nowrap',
}));

const Nav = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}));

const NavButton = styled(MenuItem)(({ theme }) => ({
  fontSize: '20px',
  listStyle: 'none',
  padding: '8px 16px',
  transition: 'color 0.2s, background-color 0.2s',

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
  ':hover': {
    color: '#212121',
    backgroundColor: '#F5F5F5',
    cursor: 'pointer',
  },
}));

export default Header;
