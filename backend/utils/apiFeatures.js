class APIFeatures {
    constructor(query, queryStr){
        this.query = query
        this.queryStr = queryStr
    }

    //Search function by keyword in name
   search() {
       const keyword = this.queryStr.keyword ? {
           name: {
               $regex: this.queryStr.keyword,
               $options: "i"
           }

       } : {}
    //    console.log(keyword)
       this.query = this.query.find({...keyword})
       return this
   }

   filter() {

       const queryCopy = { ...this.queryStr }

    //    console.log(queryCopy)

       //Removing field from the query (26)
       const removeFields = [ "keyword", "limit", "page"]
       removeFields.forEach(el => delete queryCopy[el])

       //Advance filter for numbers in price, rating etc
       let queryStr = JSON.stringify(queryCopy)
       queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
       console.log(queryStr)

       this.query = this.query.find(JSON.parse(queryStr));
       return this;
   }

   pagination(resPerPage) {
       const currentPage = Number(this.queryStr.page) || 1
       const skip = resPerPage * (currentPage - 1)
   }

}

module.exports = APIFeatures