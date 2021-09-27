import * as React from 'react';

import MenuButton from './components/MenuButton';

const Menu: React.FC<{}> = () => {

  //TODO menu config instead of hardcoded values
  return (
    <div>
      <MenuButton label="Hello" onClick={e => {console.log(e.screenX)}}/>
    </div>
  );
}

export default Menu;