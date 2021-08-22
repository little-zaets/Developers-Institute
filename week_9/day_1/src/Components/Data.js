const Data = (props) => {
	console.log(props)
	let { result, handleReset } = props;
	let { firstName, lastName, phone, email } = result;
	return (
		<>
			<form>
				<header className='display-name'>{lastName}, {firstName}</header><br/>
				<header className='display-details'>{phone} | {email}</header><br/>
				<button type="reset" onSubmit={handleReset}>Reset</button>
			</form>
		</>
	)
}

export default Data;