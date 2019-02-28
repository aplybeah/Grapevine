const { Article } = require("../models/index");

Article.remove({}).then(() => {
  Article.insertMany([
    {
      title: "New Methods in Marathon Training: Dedication, or Disaster?",
      content:
        "blah, blah, blah, blah, blah blah blah blah. Blah, blah, blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,blah,",
      comment: { content: "Im a comment!!" }
    },
    {
      title: "News, Drama, Coloring Books!!!",
      content:
        "tbh coloring books seem pretty rad right now, I'm stressed as hell.",
      comment: { content: "I too am a comment" }
    },
    {
      title: "Hot Take",
      content:
        "Sending memes and telepathic thoughts do not replace actual conversation in meaningful relationships...more at 8",
      comment: { content: "Well look who thinks they're smart" }
    }
  ]).then(articles => {
    console.log("#", articles);
    process.exit();
  });
});
