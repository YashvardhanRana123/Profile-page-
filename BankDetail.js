import React from 'react'

export const BankDetail = () => {
  return (
    <div>
        <h5>Bank Detail</h5>
        <h6>Bank Name</h6><input type='text'/>
        <h6>Account no</h6><input type='text'/>
        <h6>Branch</h6><input type='text'/>
        <h6>UPI ID (OPTIONAL)</h6><input type='text'/>
        <button className='register-button' type='button'>Save Changes</button>
    </div>
  )
}
export default BankDetail;