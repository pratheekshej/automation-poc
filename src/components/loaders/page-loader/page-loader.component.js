import React, { Fragment } from 'react';
import './page-loader.styles.scss';
import Loader from '../../../assets/loaders/spinner-blue.gif';
import { useSelector } from 'react-redux';
import { loaderData } from 'src/redux/app/app.selectors';

const PageLoader = () => {
    const { val, text } = useSelector(loaderData);

    return (
        val && (
            <Fragment>
                <div className="overlay-container loading"></div>
                <div className="loader-container">
                    <div className="loader">
                        <img src={Loader} alt="loader" />
                    </div>
                    {
                        text ?
                            <div className='loader-text'>
                                {text}...
                            </div> :
                            null
                    }
                </div>
            </Fragment>
        )
    );
}

export default PageLoader;