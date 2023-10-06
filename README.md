Task Description: Create a User Sign-Up and Post Management API
Task Objective: Create an API that allows users to sign up using their name and email, create posts with
content and user field, delete posts by providing a postID, and fetch all posts made by a specific user.

Task Requirements:

1. User Sign-Up API
   Endpoint: POST /api/signup
   Request Body:
   name (string): The user's name.
   email (string): The user's email address.
   Response:
   200: Successful user sign-up.

2. Create Post API

Endpoint: POST /api/posts
Request Body:
userId (string): The ID of the user creating the post.
content (string): The content of the post.
Response:
200 OK: Successfully created.

3. Delete Post API
   Endpoint: DELETE /api/deletepost/:postId
   Request Params:
   postId (string): The ID of the post to be deleted.
   Response:
   200: Successful post deletion.

4. Fetch User's Posts API
   Endpoint: GET /API/posts/:userId
   Request Params:
   userId (string): The ID of the user whose posts are to be fetched.
   Response:
   200: all the posts from the user

5. User Sign-Up API

   Explanation: Users provide their name and email address to sign up.

Success Response:

     ```
     {
       "status": 200,
       "message": "Successful user sign-up."
     }
     ```

Failure Responses:

Email already exists:

       ```
       {
         "status": 400,
         "message": "Email already registered."
       }
       ```

Invalid email format:

       ```
       {
         "status": 400,
         "message": "Invalid email format."
       }
       ```

2. Create Post API

   Explanation: Users create a post by providing their user ID and the content they want to share.

Success Response:

     ```
     {
       "status": 200,
       "message": "Successfully created."
     }
     ```

Failures Responses::

User ID not found:

       ```
       {
         "status": 404,
         "message": "User ID not found."
       }
       ```

Content is empty:

       ```
       {
         "status": 400,
         "message": "Content cannot be empty."
       }
       ```

3. Delete Post API

   Explanation: Users can delete a post by providing the post's unique ID.

Success Response:

````
     {
       "status": 200,
       "message": "Successful post deletion."
     }
     ```

Failure Responses:

Post ID not found:

       ```
       {
         "status": 404,
         "message": "Post ID not found."
       }
       ```






Unauthorized user:

       ```json
       {
         "status": 403,
         "message": "Unauthorized to delete this post."
       }
       ```

4. Fetch User's Posts API

   Explanation: Users can fetch all their posts using their user ID.

Success Response

     ```
     {
       "status": 200,
       "posts": [
         {
           "postId": "98765",
           "content": "This is my first post!"
         },
         {
           "postId": "98766",
           "content": "This is another post by me!"
         }
       ]
     }
     ```

Failure Response:


User ID not found:

       ```
       {
         "status": 404,
         "message": "User ID not found."
       }
       ```
No posts found:

       ```
       {
         "status": 404,
         "message": "No posts found for this user."
       }
       ```
````
