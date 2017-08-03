const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = {
  index: (req, res) => {
      Article.find({}).limit(6).populate('author').then(articles => {
            articles.forEach(a => {
                if (a.content.length > 100) {
                    a.content = a.content.substr(0, 300) + "...";
                }
            });
                  res.render('home/index',{articles: articles});

      })
  }
};