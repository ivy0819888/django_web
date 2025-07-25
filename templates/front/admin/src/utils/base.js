const base = {
    get() {
        return {
            url : "http://localhost:8080/djangok981o/",
            name: "djangok981o",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "中小学生家庭作业管理系统"
        } 
    }
}
export default base
