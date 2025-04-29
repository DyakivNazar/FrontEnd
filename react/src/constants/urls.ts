const baseUrlJP = import.meta.env.VITE_API_URL_JP
const baseUrlDJ = import.meta.env.VITE_API_URL_DJ

export const urls = {
    users:{
        allUsersJP: baseUrlJP + "/users",
        allUsersDJ: baseUrlDJ + "/users",
    },
    posts:{
        allPostsJP: baseUrlJP + "/posts",
        allPostsDJ: baseUrlDJ + "/posts",
    },
    comments:{
        allCommentsJP: baseUrlJP + "/comments",
        allCommentsDJ: baseUrlDJ + "/comments",
    }
}