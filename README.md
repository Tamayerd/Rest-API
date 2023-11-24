# Rest-API
## Requirements

The aim of this task is for the developer to retrieve data from an API, write it to a self-determined database structure within the application, and then display this data on a web page. The crucial detail here is the systematic retrieval of data from the API at regular intervals and its storage in the database. In other words, if there's updated data from the API, a new entry will be created; if the same data is received, the existing entry in the database will be updated. Consequently, the data in the database will remain in sync with the data fetched from the API. For this purpose, below is an example shared for creating a token and retrieving data through the API.

The task involves pulling data from the API on the web page and presenting it with breakdowns using methods like Group-By, similar to the example provided below. Note: Any preferred database can be utilized (SQLite, PostgreSQL, MSSQL, etc.).

As seen in the sample assignment output, the reporting output will consist of breakdowns as follows: the first breakdown will involve the first 3 digits, the second breakdown will involve the first 5 digits, and the third breakdown will total 8 digits. The breakdowns can be observed visually separated by dots (.). Additionally, the totals for debts and credits for each breakdown need to be displayed as shown in the image.
https://rahatik.com.tr/images/portfolio/resim3.jpg
