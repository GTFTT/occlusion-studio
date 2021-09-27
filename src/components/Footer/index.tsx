import * as React from 'react';

import Styles from './styles.module.css';

import Facebook from './images/Facebook.png';
import Instagram from './images/Instagram.png';
import MapLocation from './images/MapLocation.png';
import Telephone from './images/Telephone.png';
import Mail from './images/Mail.png';

export default function Footer () {
  return (
    <div className={Styles.mainCont}>
        <div className={Styles.row}>
            <img className={Styles.icon} src={Instagram} alt="instagram"/>
            <img className={Styles.icon} src={Facebook} alt="facebook"/>
        </div>

        <div className={`${Styles.row}, ${Styles.navigation}`}>
            <span className={Styles.navigationLink}>Головна</span>
            <span className={Styles.navigationLink}>Ціни</span>
            <span className={Styles.navigationLink}>Галерея</span>
            <span className={Styles.navigationLink}>Замовити</span>
        </div>

        <div className={Styles.row}>
            <span className={Styles.supportLink}>
                <img className={Styles.icon} src={MapLocation} alt="map"/>
                <span>Закарпатська обл., с.Іза вул.Учительська, 35</span>
            </span>

            <span className={Styles.supportLink}>
                <img className={Styles.icon} src={Telephone} alt="telephone"/>
                <span>+38 098 3379160</span>
            </span>

            <span className={Styles.supportLink}>
                <img className={Styles.icon} src={Mail} alt="mail"/>
                <span>dobrodent.k.s@gmail.com</span>
            </span>
        </div>

        <div className={Styles.row}>© 2021 Occlusion Studio</div>
    </div>
  );
}
