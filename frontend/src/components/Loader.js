import React from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
    return (
        <div style={{textAlign: 'center'}} className="bao">
            {/* <CircularProgress /> */}
            <img style={{width: '30%'}} src="/images/loader1.gif" alt="" />
        </div>
    );
};

export default Loader;
