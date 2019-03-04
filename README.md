# Grapevine

General Assembly Project 2

## About:

Grapevine is a online blogging app dedicated to keeping the conversation going about local topics. The app features full CRUD on making articles, and a comment feature. Future aspects will include an upvote function which will priority sort the articles, and a sign-in feature.

## Technologies:

In this app, I used a MEHN stack with external CSS. If I were to redo this project, I would probably use Bootstrap, or some other design tmeplate to save time. I've noticed that everytime I got frustrated with smething on this project, I would go back to the CSS and spend a lot of time there. One thing I am very proud of is how I formatted the forms for the app:

```css
textarea {
  display: inherit;
  width: 900px;
  font-size: 18px;
  font-family: "Righteous", cursive;
  background-color: rgba(255, 255, 255, 0.5);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
}
```

```javascript
<div class="centerspace">
    <form action="/article" method="POST">
        <input type="text" name="title" id="title" maxlength="50" placeholder="Title">
        <textarea rows="16" cols="90" name="content" id="" placeholder="Say Something..."></textarea><br>
        <input type="submit" value="Post">
    </form>
</div>
```

it wasn't too difficult to make them look nice, eg. with different fonts in the forms or adding character limits. In fact, I may be using these as templates for forms in later projects. One of the more challenging aspects of this project was connecting my two models. One solution to this problem was creating an embedded Schema in the article model. It made it easier to callback content in the database, and it was one of the only ways that made making the comment section into an array.

### Credits:

Photo by Amos Bar-Zeev on Unsplash
