import * as React from 'react';

import Menu from '../Menu';
import StyledButton from "../StyledButton";

// import Background from './images/IntroBackground.png';
import Styles from './styles.module.css';

export interface IIntroProps {
}

export default function Intro (props: IIntroProps) {
  return (
        <div className={Styles.mainCont}>
            <div className={Styles.imageCont}>
                <Menu />
                <div className={Styles.contentCont}>
                    <h1>Сучасна зуботехнічна лабораторія</h1>
                    <h5>Тут якийсь текст на опис цього</h5>
                    <StyledButton>Замовити</StyledButton>
                </div>
            </div>
        </div>
  );
}
