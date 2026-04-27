from flask import Flask, render_template, request, redirect, session
from flask_sqlalchemy import SQLAlchemy

# Create app
app = Flask(__name__)

# Secret key for login sessions
app.secret_key = "secret123"

# Database setup
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    

class TarotCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    meaning = db.Column(db.String(300), nullable=False)
    

# --------------Route for registering a new user
@app.route("/register", methods=["GET", "POST"])
def register():

    # If the user submits the form
    if request.method == "POST":

        # Get data from form inputs
        username = request.form["username"]
        password = request.form["password"]

        # Create a new user object
        new_user = User(username=username, password=password)

        # Add user to database (staging)
        db.session.add(new_user)

        # Save permanently
        db.session.commit()

        # Redirect to login page after registering
        return redirect("/login")

    # If it's a GET request, just show the page
    return render_template("register.html")

# ----------------Route for logging in
@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        # Get form data
        username = request.form["username"]
        password = request.form["password"]

        # Look for matching user in database
        user = User.query.filter_by(username=username, password=password).first()

        # If user exists
        if user:

            # Store username in session (login state)
            session["user"] = username

            return redirect("/dashboard")

        else:
            return "Invalid username or password"

    return render_template("login.html")


# ------------------Protected route (only accessible if logged in)
@app.route("/dashboard")
def dashboard():

    # If user is NOT logged in
    if "user" not in session:
        return redirect("/login")

    # If logged in, show dashboard
    return render_template("dashboard.html", user=session["user"])

# ------------------Logs the user out
@app.route("/logout")
def logout():

    # Remove user from session
    session.pop("user", None)

    return redirect("/login")

# Run the server
if __name__ == "__main__":
    app.run(debug=True)