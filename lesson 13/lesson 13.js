//6
async function albumAPI()
{
    try
    {
        const albumsUrl = 'https://jsonplaceholder.typicode.com/albums'
        const photoesUrl = 'https://jsonplaceholder.typicode.com/photos'
        const albumsRes = await fetch(albumsUrl)
        const photoesRes = await fetch(photoesUrl)
        const albumsData = await albumsRes.json()
        const photoesData = await photoesRes.json()
        document.querySelector('ul').innerHTML = ''
        const albums = albumsData.map(album => {
            const li = document.createElement('li')
            li.innerHTML = `userId: ${album.userId}<br>id: ${album.id}<br>title: ${album.title}`
            li.addEventListener('click', () => showPhotoes(album.id))
            return li
        })
        document.querySelector('ul').append(...albums)
        const showPhotoes = function(id)
        {
            document.querySelector('ul').innerHTML = ''
            const photoes = photoesData.filter(photo => photo.albumId == id).map(photo => {
                const li = document.createElement('li')
                li.innerHTML = `albumId: ${photo.albumId}<br>id: ${photo.id}<br>title: ${photo.title}<br>url: ${photo.url}<br>thumbnailUrl: ${photo.thumbnailUrl}`
                return li
            })
            document.querySelector('ul').append(...photoes)
        }
    }
    catch(error)
    {
        console.log(error)
    }
}

//7
async function postAPI()
{
    try
    {
        const postsUrl = 'https://jsonplaceholder.typicode.com/posts'
        const commentsUrl = 'https://jsonplaceholder.typicode.com/comments'
        const postsRes = await fetch(postsUrl)
        const commentsRes = await fetch(commentsUrl)
        const postsData = await postsRes.json()
        const commentsData = await commentsRes.json()
        document.querySelector('ul').innerHTML = ''
        const posts = postsData.map(post => {
            const li = document.createElement('li')
            li.innerHTML = `userId: ${post.userId}<br>id: ${post.id}<br>title: ${post.title}<br>body: ${post.body}`
            li.addEventListener('click', () => showComments(post.id))
            return li
        })
        document.querySelector('ul').append(...posts)
        const showComments = function(id)
        {
            document.querySelector('ul').innerHTML = ''
            const comments = commentsData.filter(comment => comment.postId == id).map(comment => {
                const li = document.createElement('li')
                li.innerHTML = `postId: ${comment.postId}<br>id: ${comment.id}<br>name: ${comment.name}<br>email: ${comment.email}<br>body: ${comment.body}`
                return li
            })
            document.querySelector('ul').append(...comments)
        }
    }
    catch(error)
    {
        console.log(error)
    }
}