import React from 'react';
import trashIcon from "../img/icons/trashWhite.svg"
import archiveIcon from "../img/icons/downloadWhite.svg"
const Header = () => {
    return (
        <div className="row header">
            <div className="col-2">
                <h5>Name</h5>
            </div>
            <div className="col-2">
                <h5>Created</h5>
            </div>
            <div className="col-2">
                <h5>Category</h5>
            </div>
            <div className="col-2">
                <h5>Content</h5>
            </div>
            <div className="col-2">
                <h5>Dates</h5>
            </div>
            <div className="col-2 text-end ">
                <img src={archiveIcon}/>
                <img src={trashIcon}/>
            </div>
        </div>
    );
};

export default Header;
