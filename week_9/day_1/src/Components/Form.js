import React from 'react';

const User = (props) => {
	console.log(props);
	let { result, handleSubmit, handleChange, handleReset } = props;
	let { firstName, lastName, phone, email } = result;
	return (
		<>
			<h1 className='head'>Welcome!</h1>
			<form onSubmit={handleSubmit}>
				<h3>Please provide your information below.</h3>
				<input className='input-value' type="text" name="firstName" value={firstName} onChange={handleChange} placeholder='First Name' /><br /><br />
				<input className='input-value' type="text" name="lastName" value={lastName} onChange={handleChange} placeholder='Last Name' /><br /><br />
				<input className='input-value' type="text" name="phone" value={phone} onChange={handleChange} placeholder='Phone Number' /><br /><br />
				<input className='input-value' type="email" name="email" value={email} onChange={handleChange} placeholder='Email' /><br /><br />
				<input type="submit" value="Submit" />
				<button type="reset" onClick={handleReset}>Reset</button>
			</form>
		</>
	)
}

export default User;