var Post = require('../lib/mongo').Post;
var marked = require('marked');

// 转换markdown到html
Post.plugin('contentToHtml', {
	afterFind: function(posts){
		return posts.map(function(post){
			post.content = marked(post.content);
			return post;
		});
	},
	afterFindOne: function(post){
		if(post){
			post.content = marked(post.content);
		}
		return post;
	}
});

module.exports = {
	// 创建文章
	create: function create(post){
		return Post.create(post).exec();
	},
	// 通过文章ID获取文章
	getPostById: function getPostById(postId){
		return Post
			.findOne({_id: postId })
			.populate({ path: 'author', model: 'User'})
			.addCreateAt()
			.contentToHtml()
			.exec();
	},
	// 文章按试讲降序排序
	getPosts: function getPosts(author){
		var query = {};
		if(author){
			query.author = author;
		}
		return Post
			.find(query)
			.populate({ path: 'author', model: 'User'})
			.sort({ _id: -1})
			.addCreateAt()
			.contentToHtml()
			.exec();
	},

	// 通过文章id给pv加1
	incPv: function incPv(postId){
		return Post
			.update({ _id: postId }, { $inc: {pv: 1}})
			.exec();
	}
};