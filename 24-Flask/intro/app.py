from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def root():
    html = """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>Welcome to my flask app!</p>
            <a href='/hello'>Go to the hello page</a>
            <br>
            <a href='/goodbye'>Go to the goodbye page</a>
            <br>
            <a href='/add-comment'>Go to the comments page</a>
        </body>
    </html>
    """
    return html

@app.route("/hello")
def say_Hello():
    html = """
    <html>
        <body>
            <h1>Hello World!</h1>
            <p>This is the hello page</p>
            <a href='/'>Go to the home page</a>
            <br>
            <a href='/goodbye'>Go to the goodbye page</a>
        </body>
    </html>
    """
    return html

@app.route("/goodbye")
def say_bye():
    html = """
    <html>
        <body>
            <h1>Cya Later Aligator</h1>
            <p>This is the goodbye page</p>
            <a href='/'>Go to the home page</a>
            <br>
            <a href='/hello'>Go to the hello page</a>
        </body>
    </html>
    """
    return html

@app.route("/search")
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    return f"<h1> Search Results For: {term}</h1><p> Sorting by : {sort}</p>"

# @app.route("/post", methods=["POST"])
# def post_demo():
#     return "YOU MADE A POST REQUEST"

# @app.route("/post", methods=["GET"])
# def get_demo():
#     return "YOU MADE A GET REQUEST"

@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comment</h1>
        <form method="POST">
            <input type='text' placeholder='Username' name='username'/><br>
            <input type='text' placeholder='Comment' name='comment'/><br>
            <button>Submit</button>
        </form>
    """

@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    usernmae = request.form["username"]
    return f"""
    <h1>{usernmae} said, "{comment}"</h1>
    <a href='/'>Go to the home page</a>
    """

@app.route('/r/<subreddit>')
def showSubreddit(subreddit):
    return f"""
    <h1>Browsing The {subreddit} Subreddit</h1>
    """

POSTS = {
    1: "I am Andrew",
    2: "I love Sophie",
    3: "Sophie loves me"
}

@app.route('/posts/<int:id>')
def find_post(id):
    post = POSTS.get(id, "Post not found")
    return f"<p>{post}</p>"

@app.route("/r/<subreddit>/comments/<int:post_id>")
def show_comments(subreddit, post_id):
    return f"<h1>Viewing comments for post with id: {post_id} from the {subreddit} Subreddit</h1>"

