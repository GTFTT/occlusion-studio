import * as React from 'react';

import Styles from './styles.module.css';

import MiniBlock from './MiniBlock';

import Clipboard from './images/Clipboard.png';
import DentalCheckup from './images/DentalCheckup.png';
import LowPrices from './images/LowPrices.png';

export default function MiddleBlock () {
    return (
        <div>
            <div className={Styles.contentCont}>
                <span className={Styles.title}>Чому потрібно вибрати нас ?</span>

                <span className={Styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in sagittis,
                    dignissim hendrerit id dolor blandit. Habitasse ullamcorper scelerisque
                    iaculis pharetra, sagittis ut elementum orci potenti. Sagittis purus rhoncus
                    proin consequat. Laoreet duis dui quisque scelerisque. Quis in sit egestas
                    morbi id a massa tellus.
                </span>

                <span className={Styles.underscore} />

                <div className={Styles.miniBlocksCont}>
                    <MiniBlock number={1} image={Clipboard} />
                    <MiniBlock number={2} image={DentalCheckup} />
                    <MiniBlock number={3} image={LowPrices} />
                </div>
            </div>
        </div>
    );
}
