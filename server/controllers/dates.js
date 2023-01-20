const dates = (date)=>{
    var date2 = new Date(date)
    var date1 = new Date()
    var diff = date1.getTime()-date2.getTime()
    var d = diff/(1000*3600*24)
    return d.toFixed(0)
}
export default dates;

