/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Styles from './styles.module.css';

import DEFAULT_IMAGE from './ImageNotFound.png';

/**
 * @property image - imported image to load
 */
export default class Image extends React.PureComponent {

    render() {
        const {
            image,
        } = this.props;

        return <div className={ Styles.imageCont }>
            <img
                src={ image || DEFAULT_IMAGE }
                className={Styles.image}
                alt="image"
            />
        </div>;
    }
}