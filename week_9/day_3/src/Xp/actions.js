export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';

export const handleInput = (value) => {
	return {
		type: INSERT,
		payload: value
	}
}
export const handleSubmit = (e) => {
	return {
		
	}
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }