import { FC } from 'react';

import { HeaderContainer, AppBarContainer, ToolbarContainer, TypographyContainer } from './Header.styles';

const Header: FC = () => (
  <div data-test="component-header">
    <HeaderContainer data-test="header">
      <AppBarContainer data-test="header-appbar">
        <ToolbarContainer data-test="header-toolbar">
          <TypographyContainer variant="h4" data-test="header-typography">
            柴犬のいる暮らし
          </TypographyContainer>
        </ToolbarContainer>
      </AppBarContainer>
    </HeaderContainer>
  </div>
);

export default Header;
