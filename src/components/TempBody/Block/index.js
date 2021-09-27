import React from 'react';

import Styles from './styles.module.css';
import Image from './Image';


export default class Block extends React.Component {

    render() {
        const {
            image,
            title,
            children,
        } = this.props;

        return <div className={Styles.blockCont}>
            <div className={Styles.contentCont}>
                <div className={Styles.title}>{ title }</div>
                <div className={Styles.childrenCont}>{ children }</div>
            </div>
            <div className={Styles.imageCont}>
                {
                    image
                        ? <Image image={ image }/>
                        : null
                }
            </div>
        </div>
    }
}