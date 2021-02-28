class Story{
    constructor(StoryID, StoryTitle, StoryText, StoryDate, UserID){
        this.StoryID = StoryID;
        this.StoryTitle = StoryTitle;
        this.StoryText = StoryText;
        this.StoryDate = StoryDate;
        this.UserID = UserID;
    }
}

module.exports = Story;