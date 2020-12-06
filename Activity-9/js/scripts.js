$(function() {
    var data = [
        {
            id: 1,
            title:'Stress Relief',
            body: 'The doctor said, if I cant find a new way to relate more positively to my surroundings, Im going to die. Im going to die.',
            author: 'Stanley Hudson'
        },
        {
            id: 2,
            title: 'Various Episodes',
            body: 'Thats what she said.',
            author: 'Micheal Scott'
        },
        {
            id: 3,
            title: 'Stress Relief 2',
            body: 'No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what?' +  
                    ' If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality' + 
                    ' of life do we have there?',
            author: 'Michael Scott'
        },
        {
            id: 4,
            title: 'The Convict',
            body: 'The worst thing about prison was the... was the dementors. They were flying all over the place and they were scary and then they would come down' + 
            'and they would suck the soul out of your body. And it hurt!',
            author: 'Prison Mike'
        },
        {
            id: 5,
            title: 'Ben Franklin',
            body: 'There is too many people on this earth. We need a new plague',
            author: 'Dwight Schrute'
        }
    ];

    var $nav = $('#nav-container');
    var $intro = $('#intro');
    var $posts = $('#post-container');

    function initPosts(){
        for (let i = 0; i < data.length; i++) {
            //Create elements
            var postId = 'post-' + data[i].id,
            $post = $('<section class = "post"></section>'),
            $title = $('<h2 class="title"></h2>'),
            $body = $('<blockquote></blockquote>'),
            $author = $('<span class="author"></span>'),
            $navItem = $('<li></li>');

            //add post data
            $title.text(data[i].title);
            $body.text(data[i].body);
            $author.text(data[i].author);

            //add nav item data
            $navItem.attr('id', data[i].id);
            $navItem.text(data[i].title);

            //combine post elements
            $post.attr('id', postId);
            $post.append($title);
            $post.append($body);
            $post.append($author);

            //add post and nav elements to page
            $posts.append($post);
            $nav.append($navItem);

            //wire up nav item click event handler
            $navItem.on('click', function(){
                var id = $(this).attr('id');
                $posts.children().hide();
                $posts.find('#post-' +id).fadeIn();
            });
            
            //Hide all posts and show the intro
            $posts.children('.post').hide();
            $intro.fadeIn(1000
                )
        }
     }

     initPosts();
});
