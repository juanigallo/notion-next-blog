## notion-next-blog

Easy to manage personal blog built with Notion as content manager and Next for the frontend


## How it works

### 1. Create an integration in Notion

Go to: https://www.notion.so/my-integrations and create an integration. The only capability you will need is "Read content". Save your `secret` you are going to use it.

![image](https://user-images.githubusercontent.com/4969737/190536384-510539e0-217f-45af-a4b6-9ff0f62408bd.png)


### 2. Create a database

In notion, create an empty file and add a database typing `/database` and selecting `Database - Full page`

![image](https://user-images.githubusercontent.com/4969737/190536711-e236475b-12ec-4e55-aec9-49b734401ccf.png)

### 3. Connect the database with the integration

Inside the database file, click on the three dots and in the connections option select the one that you created in the first step

![image](https://user-images.githubusercontent.com/4969737/190537015-d436bcf7-5d6f-4a6e-98a1-54c8197f0af7.png)

### 4. Integrate the database to your code

Clone this repository and in the root of the project, create a file called `.env` with two keys `NOTION_TOKEN` and `NOTION_DATABASE_ID`. For the `NOTION_TOKEN` key, you will need to add the secret you got in the first step. In `NOTION_DATABASE_ID` you need to put the ID of your database which you can take from the URL 

![tempsnip](https://user-images.githubusercontent.com/4969737/190540715-0c8c599f-bda7-41e7-b4fe-76053d022564.png)


### 5. Start writing

Now you can create a description column in your database and start writing your posts, the information will automatically be displayed ni your Frontend

![image](https://user-images.githubusercontent.com/4969737/190541496-7e96d6bb-6260-45fb-b366-55c061a7df62.png)
![image](https://user-images.githubusercontent.com/4969737/190541594-47788354-3a4d-42aa-9a37-71cdb3ded506.png)
![image](https://user-images.githubusercontent.com/4969737/190541698-2f4096b8-22d6-4741-9b6c-3049800f27e9.png)


