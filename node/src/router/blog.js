const {getList,getDetail,newBlog,updateBlog,deleteBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req,res) => {
    const method = req.method
    const id = req.query.id || ''

    //获取博客列表
    if(method === 'GET' && req.path === '/api/blog/list'){
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const dataList = getList(author,keyword)

        return new SuccessModel(dataList)
    }
    //获取博客详情
    if(method === 'GET' && req.path === '/api/blog/detail'){
        const detailMsg = getDetail(id)
        return new SuccessModel(detailMsg)
    }
    //新建博客
    if(method === 'POST' && req.path === '/api/blog/new'){
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }
    //更新博客
    if(method === 'POST' && req.path === '/api/blog/update'){
        const result = updateBlog(id,req.body)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('更新博客失敗')
        }
    }
    //删除博客
    if(method === 'POST' && req.path === '/api/blog/del'){
        const result = deleteBlog(id)
        if(result){
            return new SuccessModel()
        }else{
            return new ErrorModel('刪除博客失敗')
        }
    }
}

module.exports = handleBlogRouter