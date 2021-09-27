import * as React from 'react';

import Styles from './styles.module.css';
import Team from './images/Team.png';
import Block from './Block';

/**
 * TODO create normal components, this was created temporarily for presentation purposes
 */
export default function TempBody () {
  return (
    <div className={ Styles.mainCont }>
      <Block title={"Сучасна команда зубних техніків"} image={Team}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Hac maecenas feugiat mauris, lacus non urna facilisis mattis.
      Quam a, posuere ut convallis. Neque aliquam lacus tempor sed sed cum nec.
      Eu morbi sit quis semper quam. Molestie quis lobortis quam massa
      dictum facilisi mauris venenatis. Ut nisl enim mauris odio pulvinar
      dignissim porta phasellus. Praesent et egestas at gravida gravida ultricies quis non.
      </Block>
    </div>
  );
}
