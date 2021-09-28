import * as React from 'react';

import MenuButton from './components/MenuButton';

import Styles from './styles.module.css';
import Logo from './images/OcclusionStudioLogo.png';

const Menu: React.FC<{}> = () => {

  //TODO menu config instead of hardcoded values
  return (
    <div className={Styles.menuContainer}>
      <MenuButton label="Головна" />
      <MenuButton label="Ціни" />
      <img className={Styles.logo} src={ Logo } alt="logo"/>
      <MenuButton label="Галерея" />
      <MenuButton label="Замовити" />
    </div>
  );
}

export default Menu;