import React from 'react';
import PropTypes from 'prop-types';

import './DataStudioModal.css';

const DataStudioModal = (props) => {

    const dataStudioModalHandler = () => {
        document.body.classList.toggle(`DataStudioModal__open`);
        document.body.classList.toggle(`DataStudioModal-${props.name}__open`);
    };

    const renderDisclaimer = () => {
        if (props.showDisclaimer) {
            return (
                <div className="DataStudioModal-disclaimer"><b>disclaimer</b>: datas are based on users internet speed this means that they may contains false positive</div>
            );
        }

        return '';
    };

    return (
        <div className={`DataStudioModal ${props.name}`}>
            <div className="close fa fa-times" aria-hidden="true" onClick={dataStudioModalHandler}><span className="hide-text">close</span></div>
            <div className="DataStudioModal-content">
                <img alt="DataStudioModal ratio" className="DataStudioModal-ratio" src={`http://placehold.it/${props.width}x${props.height}`} />
                <iframe className="DataStudioModal-iframe" title={`${props.name} from Google Data Studio`} width={props.width} height={props.height} src={props.iframe} allowFullScreen></iframe>
                {renderDisclaimer()}
            </div>
        </div>
    );

}

DataStudioModal.defaultProps = {
    showDisclaimer: true
}

DataStudioModal.propTypes = {
    name: PropTypes.string.isRequired,
    showDisclaimer: PropTypes.bool,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    iframe: PropTypes.string.isRequired,
};

export default DataStudioModal;
