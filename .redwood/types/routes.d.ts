
            declare module '@redwoodjs/router' {
              interface AvailableRoutes {
                home: () => "/"
newPost: () => "/posts/new"
editPost: () => "/posts/{id:Int}/edit"
post: () => "/posts/{id:Int}"
posts: () => "/posts"
              }
            }

            import type EditPostPageType from '/Users/john/Documents/redwood-blog/web/src/pages/EditPostPage/EditPostPage'
import type FatalErrorPageType from '/Users/john/Documents/redwood-blog/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Users/john/Documents/redwood-blog/web/src/pages/HomePage/HomePage'
import type NewPostPageType from '/Users/john/Documents/redwood-blog/web/src/pages/NewPostPage/NewPostPage'
import type NotFoundPageType from '/Users/john/Documents/redwood-blog/web/src/pages/NotFoundPage/NotFoundPage'
import type PostPageType from '/Users/john/Documents/redwood-blog/web/src/pages/PostPage/PostPage'
import type PostsPageType from '/Users/john/Documents/redwood-blog/web/src/pages/PostsPage/PostsPage'
            declare global {
              const EditPostPage: typeof EditPostPageType
const FatalErrorPage: typeof FatalErrorPageType
const HomePage: typeof HomePageType
const NewPostPage: typeof NewPostPageType
const NotFoundPage: typeof NotFoundPageType
const PostPage: typeof PostPageType
const PostsPage: typeof PostsPageType
            }
          