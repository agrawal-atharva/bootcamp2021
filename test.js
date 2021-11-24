/*Create a Database named 'MYWall'*/
// use MYWall;

/*Create two collections named 'user and ''post'*/
// db.createCollection('user')
// db.createCollection('post')

/*Insert some post related information like post_id, title, description , posted_by, comments, created_at etc…*/
// db.post.insert([
// 	{
// 		post_id: 1,
// 		title: 'Birthday',
// 		description: 'This is my birthday post',
// 		poated_by: 'atharva',
// 		comments: [
// 			{ comment_id: 01, message: 'Happy Birthday', timestamp: '1375479697' },
// 			{
// 				comment_id: 02,
// 				message: 'Wish you a great birthday',
// 				timestamp: '1472797122',
// 			},
// 		],
// 		created_at: '1298504848',
// 	},
// ]);


/*Write query to add a new comment for a post*/
// db.post.update(
// 	{ post_id: 1 },
// 	{
// 		$push: {
// 			comments: {
// 				comment_id: 03,
// 				message: 'Enjoy your day!',
// 				timestamp: '1687804336',
// 			},
// 		},
// 	}
// );

/*Write query to update description of a post*/
// db.post.update(
// 	{ post_id: 1 },
// 	{ $set: { description: 'I have my birthday today!!!' } }
// );


// db.post.update(
// 	{ post_id: 1 },
// 	{ $set: { comments[0] : {
// 		$set: {message: 'God bless you!'}
// 	}}}
// );