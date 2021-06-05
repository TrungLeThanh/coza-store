import React, {useState, useEffect} from 'react';
import './BackTop.css';

const BackTop = () =>{

    const [back, setBack] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const changeBack = () =>{
        if(window.scrollY>=100){
            setBack(true);
        }
        else{
            setBack(false);
        }
    };

    const onClickBtn = () =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('scroll', changeBack);

    return (
        <div className="back-top">
            <button onClick={onClickBtn} id={back ? 'back-tran' : 'back-btn'} className="ui circular icon button">
                <i style={{width: '20px', height: '20px'}} className="fas fa-chevron-up" />
            </button>
        </div>
        
    );
};

export default BackTop;
