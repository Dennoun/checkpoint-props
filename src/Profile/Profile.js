import React from 'react';
import PropTypes from "prop-types";



const Profile = (props) =>  {
    const styleDiv = {
        width: '50%',
        margin: '100px auto 100px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 5px 10px 2px rgba(0,0,0,0.25)',
        padding: '20px'
    }
    return(
    
    <div style={styleDiv}>
        {props.children}
        <div>
            <h1>
                fullName: "{props.fullName}" <br /> bio: "{props.bio}"<br /> profession:"{props.profession}"
            </h1>
            <button onClick={() => props.handleName(props.fullName)}>Click Me If You Dare</button>

        </div>
       
        
        
    </div>
    )
}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName:PropTypes.func,

}
Profile.defaultProps = {
    fullName: "Anonymos",
    bio: "NoLife",
    profession: "unemployed"
};

export default Profile