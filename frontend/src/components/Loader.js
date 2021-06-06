import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
    return (
        // <div className="ui active centered inline loader" />
        <div style={{textAlign: 'center'}} className="bao">
            <CircularProgress />
        </div>
    );
};

export default Loader;
