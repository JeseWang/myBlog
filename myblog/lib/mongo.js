var config = require('config-lite');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

mongolass.connect(config.mongodb);

exports.User = mongolass.model('User',{
	name: {type: 'string'},
	password: {type: 'string'},
	avatar: {type: 'string'},
	gender: {type: 'string', enum: ['m', 'f', 'x']},
	bio: {type: 'string'}
});
exports.User.index({name: 1}, {unique: true}).exec();

exports.Post = mongolass.model('Post', {
	author: {type: 'Mongolass.Type.ObjectId'},
	title: {type: 'string'},
	content: {type: 'string'},
	pv: {type: 'number'}
});
// 按创建时间降序查看用户的文章列表
exports.Post.index({author: 1, _id: -1 }).exec();

// 根据id生成创建时间create_at
mongolass.plugin('addCreateAt',{
	afterFind: function(results){
		results.forEach(function(item){
			item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
		});
		return results;
	},
	afterFindOne: function(result){
		if(result){
			result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
		}
		return result;
	}
});
