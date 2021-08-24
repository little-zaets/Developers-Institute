import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const SearchBox = (props) => {
  	const { onInputChange } = props; //onChange variation also depends on this line not being included
  	return (
    	<div className="pa2">
     		<input type="text"
          		placeholder="Search Robot..."
          		className="pa3 ba b--green bg-lightest-blue"
				onChange={onInputChange}  //can also dispatch here onChange = (e) => props.dispatch(handleSelect(e.target.value))
			/>
    	</div>
  	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		//callback function to handle event
		onInputChange: (e) => dispatch(setSearchField(e.target.value))
	}
}
//above onchange variation works only if dispatch is not included below ( connect()(searchBox) )
export default connect(null, mapDispatchToProps)(SearchBox);