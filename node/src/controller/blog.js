const getList = (author,keyword) => {
    return [
        {
            id:1,
            title:'标题一',
            content:'内容一',
            createTime:1555938693415,
            author:'bingyuan'
        },
        {
            id:2,
            title:'标题二',
            content:'内容二',
            createTime:1555938753256,
            author:'luolei'
        },
        {
            id:3,
            title:'标题三',
            content:'内容三',
            createTime:1555938764224,
            author:'zhangsan'
        },
    ]
}

const getDetail = (id) => {
    return {
        id:3,
        title:'标题三',
        content:'内容三',
        createTime:1555938764224,
        author:'zhangsan'
    }
}

const newBlog = (blogData = {}) =>{
    return {
        id:3
    }
}
const updateBlog = (id,blogData = {}) =>{
    return true
}
const deleteBlog = (id = {}) =>{
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}