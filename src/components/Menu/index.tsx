import * as React from 'react';

import MenuButton from './components/MenuButton';

import Styles from './styles.module.css';
import Logo from './images/OcclusionStudioLogo.png';

const Menu: React.FC<{}> = () => {

  //TODO menu config instead of hardcoded values
  return (
    <div className={Styles.menuContainer}>
      <MenuButton label="Головна" onClick={e => {console.log(e.screenX)}}/>
      <MenuButton label="Ціни" onClick={e => {console.log(e.screenX)}}/>
      <img src={ Logo } alt="logo"/>
      <MenuButton label="Галерея" onClick={e => {console.log(e.screenX)}}/>
      <MenuButton label="Замовити" onClick={e => {console.log(e.screenX)}}/>
    </div>
  );
}

export default Menu;