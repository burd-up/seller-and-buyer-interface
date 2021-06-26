import React, {useState} from 'react';
import style from "../../buyer/product/product.module.css";

const BlockDescription = React.memo((props) => {

    const [changer, setChanger] = useState(false);

    return <div>
        {
            !changer ?
                <button className={style.descriptionButtonOpen} onClick={() => setChanger(true)}>description </button>
                : <div className={style.description}>
                    <textarea className={style.descriptionText} value={props.description}></textarea>
                    <button className={style.descriptionButton} onClick={() => setChanger(false)}>x</button>
                </div>
        }
    </div>
})

export default BlockDescription;