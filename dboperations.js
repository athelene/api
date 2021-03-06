var config = require('./dbconfig');
const sql = require('mssql');

async function getStories(){
    try{
        console.log('about to connect to sql');
        let pool = await sql.connect(config);
        let stories = await pool.request().query("SELECT StoryID, StoryTitle, FORMAT (StoryDate, 'MMM dd yyyy hh:mm:ss tt') as StoryDate from StoryTbl");
        return stories.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

async function getStories(){
    try{
        console.log('about to connect to sql');
        let pool = await sql.connect(config);
        let stories = await pool.request().query("SELECT StoryID, StoryTitle, FORMAT (StoryDate, 'MMM dd yyyy hh:mm:ss tt') as StoryDate from StoryTbl");
        return stories.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

async function getTodaysQC(){
    try{
        console.log('about to connect to sql');
        let pool = await sql.connect(config);
        let todaysqc = await pool.request().query("SELECT ViewPointQ, FORMAT (ViewPointDate, 'MM-dd-yyyy') as ViewPointDate from ViewPointTbl where ViewPointDate = (CONVERT(date, getdate()))");
        return todaysqc.recordsets;
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = {
    getStories : getStories,
    getTodaysQC : getTodaysQC
}