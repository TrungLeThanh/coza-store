import React, {useState} from 'react';
import './Overview.css';
import TextField from '@material-ui/core/TextField';

const Overview = () => {

    const [active, setActive] = useState(1);

    return (
        <div className="wrap-overview">
            <h3>Product Overview</h3>
            <div className="overview-select">
                <div className="list-overview">
                    <button onClick={() => setActive(1)} style={{paddingLeft: '0'}} className={`ui button ${active===1 ? 'active-color' : ''}`}>All products</button>
                    <button onClick={() => setActive(2)} className={`ui button ${active===2 ? 'active-color' : ''}`}>Woman</button>
                    <button onClick={() => setActive(3)} className={`ui button ${active===3 ? 'active-color' : ''}`}>Man</button>
                    <button onClick={() => setActive(4)} className={`ui button ${active===4 ? 'active-color' : ''}`}>Bag</button>
                    <button onClick={() => setActive(5)} className={`ui button ${active===5 ? 'active-color' : ''}`}>Shoes</button>
                    <button onClick={() => setActive(6)} className={`ui button ${active===6 ? 'active-color' : ''}`}>Watches</button>
                </div>
                <div style={{marginTop: '-20px', position: 'relative'}} className="form-search">
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Search..." />
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Overview;
