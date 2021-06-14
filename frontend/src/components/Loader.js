import React from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
    return (
        <div style={{textAlign: 'center'}} className="bao">
            {/* <CircularProgress /> */}
            <img style={{width: '60%'}} src="/images/loader.gif" alt="" />
        </div>
    );
};

export default Loader;
