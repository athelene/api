var config = require('./dbconfig');
const sql = require('mssql');

async function getStories(){
    try{
        let pool = await sql.connect(config);
        let stories = await pool.request().query("SELECT * from StoryTbl");
        return stories.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = {
    getStories : getStories
}