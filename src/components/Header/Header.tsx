import React from 'react';

import { HeaderContainer, AppBarContainer, ToolbarContainer, TypographyContainer } from './Header.styles';

const Header = () => (
  <div data-test="component-header">
    <HeaderContainer data-test="header">
      <AppBarContainer data-test="header-appbar">
        <ToolbarContainer data-test="header-toolbar">
          <TypographyContainer data-test="header-typography">柴犬のいる生活</TypographyContainer>
        </ToolbarContainer>
      </AppBarContainer>
    </HeaderContainer>
  </div>
);

export default Header;
