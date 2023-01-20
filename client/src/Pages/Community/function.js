const likes = (post,id)=>{
    if(post.includes(id)){
        return true
    }else{
        return false
    }
}

export default likes