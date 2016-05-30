var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new libary for making fast dynamic pages',
    imageURL: 'http://formatjs.io/img/react.svg'
  }, {
    title: 'See Tutorials',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow',
    imageURL: 'http://brunch.io/images/others/gulp.png'
  }]
};

// React, please render this class
var element = React.createElement(ThumbnailList, options);

// React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
