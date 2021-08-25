import { connect } from 'react-redux';

const TransactionForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit} autoComplete="off">
                <input name="accountNo" placeholder="Account Number" onChange={props.onInputChange} value={props.accountNo} /><br />
            	<input name="FSC" placeholder="FSC" onChange={props.onInputChange} value={props.FSC} /><br />
            	<input name="bankName" placeholder="A/C Holder Name" onChange={props.onInputChange} value={props.bName} /><br />
            	<input name="amount" placeholder="Amount" onChange={props.onInputChange} value={props.amount} /><br />
            	<button type="submit">Submit</button>
        	</form>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);