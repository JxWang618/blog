const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    //blog router
    const blogData = handleBlogRouter(req, res)
    if (blogData) { 
        res.end(
            JSON.stringify(blogData)
        )
        return 
    }
    // user router
    const userData = handleUserRouter(req, res)
    if (userData) { 
        res.end(
            JSON.stringify(userData)
        )
        return
    }
    //if not contact router 
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("404 NOT Found\n")
    res.end()
}

module.exports = serverHandle

//env:process.env.NODE_ENV