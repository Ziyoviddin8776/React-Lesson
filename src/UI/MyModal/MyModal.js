import React from 'react';
import classes from "./MyModal.module.css"

function MyModal({children,modal,setModal}) {
    const   modalClasses=[classes.dadModal];
    if(modal){
        modalClasses.push(classes.active)
    }
    return (
        <div onClick={()=>setModal(false)} className={modalClasses.join(" ")}>
            <div onClick={e=>e.stopPropagation()} className={classes.childModal}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;