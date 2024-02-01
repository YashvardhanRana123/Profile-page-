import React from 'react'

export const Profile = () => {
  return (
    <div>
         <div className='form'>
        <h5>Bussiness Information</h5>
        <div className='Size-Profile'>
            <h6>Your Name</h6><input className='inputBox' type='text' placeholder='Write Your name'/>
            <h6>Bussiness Name</h6> <input className='inputBox' type='text' placeholder='Write Your Bussiness Name'/>
            <h6>Phone no</h6><input className='inputBox' type='text'/>
            <h6>Email</h6><input className='inputBox' type ='email' />
            <h6>Bussiness Webside Link</h6><input className='inputBox' type='text' />
</div>
            <h6>More Information</h6>
            <h6>GSTIN</h6><input className='inputBox' type='text'/>
            <h6>State</h6> <input className='inputBox' type='text' />
            <h6>Adress Line 1</h6><input className='inputBox' type='text'/>
            <h6>Adress line 2</h6><input className='inputBox' type='text'/><br></br>
            <label for="myfile"><h6>Your Logo</h6></label>
            <input type="file" id="myfile"
            name="myfile"></input>
            <button className='register-button' type='button'> Save Changes</button>
    </div>
    </div>
  )
}
export default Profile;