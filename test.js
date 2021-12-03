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

// db.post.updateOne(
// 	{ post_id: 1, 'comments.comment_id': 01 },
// 	{ $set: { 'comments.$.message': 'Updating the message' } }
// );

// db.post.updateOne(
// 	{ post_id: 1, 'comments.comment_id': 03 },
// 	{ $pull: { comments: { comment_id: 03 } } }
// );

// db.user.insert({
// 	firstName: 'Atharva',
// 	lastName: 'Agrawal',
// 	age: 22,
// 	email: 'atharva.agrawal@ttn.com',
// 	created_on: new Date(),
// })

// db.user.insert({
// 	firstName: 'Adhvita',
// 	lastName: 'Ahuja',
// 	age: 23,
// 	email: 'adhvita.ahuja@ttn.com',
// 	created_on: new Date(),
// })

// db.user.insert({
// 	firstName: 'Palkin',
// 	lastName: 'Wadhwa',
// 	age: 22,
// 	email: 'palkin@ttn.com',
// 	created_on: new Date(),
// })
