const express = require('express');

const router = express.Router();

const { Article } = require('../models/article.model');
const {ValidateToken} = require('../middlewares/validate-token.middleware')
/**
 * {
 *  id: string,
 *  title: string,
 *  content: string,
 *  publisher: {
 *      name: string
 *      id: string
 *  }
 *  createdAt: Date
 * }
 */

// Request => [[headers][body]]
// Response => [[headers][body]]

// const {name, content} = {name: 'bla bla', content: 'bla bla bla'}

const user = {
	name: 'ibrahem',
	id: '1',
};

const articles = [];
let lastId = 0;

router.get('/', ValidateToken, async (req, res) => {
	const articles = await Article.find({'publisher.id': req.user.id});
	res.status(200).json({
		articles,
	});
});

// /article/{articleId}
router.get('/:id',ValidateToken, async (req, res) => {
	const { id } = req.params;

	// const article = articles.find((art) => art.id == id);
	try {
		const article = await Article.findById(id);

		if (!article) return res.status(404).json({ msg: 'Article Not Found' });

		res.json({
			article,
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ msg: 'Invalid Id' });
	}
});

// /article
router.post('/',ValidateToken,  async (req, res) => {
	const { title, content } = req.body;
	// lastId++;
	// const article = {
	//     id: lastId,
	//     title,
	//     content,
	//     createdAt: new Date(),
	//     publisher: user
	// }

	// articles.push(article)
	const article = new Article({
		title,
		content,
		publisher: req.user,
	});

	await article.save();

	res.status(201).json({
		article,
	});

	// const { title, content, } = req.body;
	// lastId++;

	// // const article = {
	// //     id: lastId,
	// //     title,
	// //     content,
	// //     createdAt: new Date(),
	// //     publisher: user
	// // }

	// // articles.push(article)

	// const article = new Article({
	// 	title,
	// 	content,
	// 	publisher: user,
	// });

	// await article.save();

	// res.status(201).json({
	// 	article,
	// });
});

router.put('/:id',ValidateToken, async (req, res) => {
	const { id } = req.params;
	const { title, content } = req.body;

	// const article = articles.find((art) => art.id == id);

	// if (!article) return res.status(404).json({ msg: 'Article Not Found' });

	// // OPTION 1
	// article.title = title ? title : article.title;
	// // OPTION 2
	// if (content) {
	// 	article.content = content;
	// }

	// OPTION 1

	// const user = req.user;

	// const article = await Article.findById(id);


	// if (article.publisher.id != user.id) return res.status(403).json({
	// 	msg: "You Are Not Allowed For This Action"
	// })

	// article.title = title ? title : article.title;
	// article.content = content ? content :article.content;
	// await article.save()

	// OPTION 2

	const user = req.user;
	const update = {};
	if (title) {
		update.title = title;
	}
	if (content) {
		update.content = content;
	}

	const article = await Article.findOneAndUpdate({
		_id: id,
		'publisher.id': user.id
	}, update, { new: true });

	if (!article) return res.status(403).json({
		msg: "You Are Not Allowed For This Action"
	})

	res.status(200).json({ article });
});

router.delete('/:id',ValidateToken, async (req, res) => {
	const { id } = req.params;

	const article = await Article.findOneAndDelete({_id: id, 'publisher.id': req.user.id});

	if (!article) return res.status(404).json({ msg: 'article not found with given id' });

	res.status(200).json({
		msg: 'Article Deleted Successfully',
	});
});
module.exports = router;
