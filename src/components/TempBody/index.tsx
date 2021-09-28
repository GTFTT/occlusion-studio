import * as React from 'react';

import Styles from './styles.module.css';
import Team from './images/Team.png';
import Block from './Block';
import LastBlock from './LastBlock';
import MiddleBlock from './MiddleBlock';
import StyledButton from './../StyledButton';

/**
 * TODO create normal components, this was created temporarily for presentation purposes(method of fast programing just to show concept).
 */
export default function TempBody () {
  return (
    <div className={ Styles.mainCont }>
      <div className={Styles.descriptionCont}>
        <Block title={"Сучасна команда зубних техніків"} image={Team}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Hac maecenas feugiat mauris, lacus non urna facilisis mattis.
          Quam a, posuere ut convallis. Neque aliquam lacus tempor sed sed cum nec.
          Eu morbi sit quis semper quam. Molestie quis lobortis quam massa
          dictum facilisi mauris venenatis. Ut nisl enim mauris odio pulvinar
          dignissim porta phasellus. Praesent et egestas at gravida gravida ultricies quis non.
        </Block>
      </div>
      

      {/* ---- Image block 1 ------------ */}
      <div className={Styles.imageBlockCont}>
        <div className={Styles.imageCont1}>
          <div className={Styles.contentCont}>
            <h2>Сучасна зуботехнічна лабораторія</h2>
            <StyledButton>Hello</StyledButton>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}

      <div className={Styles.descriptionCont}>
        <MiddleBlock />
      </div>
      
      {/* ---- Image block 2 ------------ */}
      <div className={Styles.imageBlockCont}>
        <div className={Styles.imageCont2}>
          <div className={Styles.contentCont}>
            <h2>Scelerisque ut non commodo</h2>
            <StyledButton style={{
              backgroundColor: '#E04555'
            }}>
              Ціни
            </StyledButton>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}
      
      <LastBlock />

    </div>
  );
}
