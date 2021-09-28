import * as React from 'react';

import Styles from './styles.module.css';

interface Props {
    /** Number of miniblock (in form of string) */
    number: string,

    /** Image path */
    image: string,
}

export default function MiniBlock (props: Props) {
    return (
        <div className={Styles.contentCont}>
            <span className={Styles.title}>
                <img className={Styles.image} src={props.image} alt="img"/>
            </span>
            
            <span className={Styles.number}>{ props.number }</span>

            <span className={Styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum in ac tortor sagittis sed integer mollis gravida.
                Pulvinar volutpat volutpat.
            </span>
        </div>
    );
}
