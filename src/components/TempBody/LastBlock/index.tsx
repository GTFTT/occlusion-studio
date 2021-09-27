import * as React from 'react';

import Styles from './styles.module.css';

export default function LastBlock () {
    return (
        <div>
            <div className={Styles.contentCont}>
                <span className={Styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit.</span>

                <span className={Styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in sagittis,
                    dignissim hendrerit id dolor blandit. Habitasse ullamcorper scelerisque
                    iaculis pharetra, sagittis ut elementum orci potenti. Sagittis purus rhoncus
                    proin consequat. Laoreet duis dui quisque scelerisque. Quis in sit egestas
                    morbi id a massa tellus.
                </span>

                <span className={Styles.underscore} />
            </div>
        </div>
    );
}
