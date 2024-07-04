import React, { useState } from 'react';
import './ballon.css'

function Balloon() {
    const [showBalloon, setShowBalloon] = useState(false);

    const handleClick = () => {
        setShowBalloon(!showBalloon);
    };
    return (
        <>
            <div className='helpButtonContainer'>
                <div class="button" onClick={handleClick}>
                    <a>?</a>
                </div>
                {showBalloon && (
                    <div className="balloon">
                        <div className="balloon-content">
                            Use as setas do teclado para mover as peças!<br />Shift para guardar uma peça!<br />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Balloon
