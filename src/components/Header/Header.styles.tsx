import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const HeaderContainer = styled.div`
  flex-grow: 1;
`;

export const AppBarContainer = styled(AppBar)`
  position: static;
`;

export const ToolbarContainer = styled(Toolbar)``;

export const TypographyContainer = styled(Typography)`
  font-variant: h6;
  flex-grow: 1;
`;
