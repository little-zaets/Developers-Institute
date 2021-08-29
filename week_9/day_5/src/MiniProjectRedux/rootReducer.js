import { DELETE_POST } from './actions';

let initState = {
	posts: 
		[
			{id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
			{id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
			{id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
		]
}


export const rootReducer = (state = initState, action = {}) => {
	switch (action.type) {
		case DELETE_POST:
			console.log('inside DELETE_POST')
			let posts = state.posts.filter(post => {
				return post.id !== action.id
			})
			return { ...state, posts:posts }
		default: 
			console.log('inside default')
			return {...state}
	}
}

export default rootReducer;