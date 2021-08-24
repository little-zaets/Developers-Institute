import Card from './Card'

const CardList = (props) => {
	const { robots } = props;
	return (
		<div>
			{
				robots.map((user, i) => {
					console.log(user, i)
					return (
							<Card robotinfo={user} />
					)
				})
			}
		</div>
	)
}

export default CardList;
