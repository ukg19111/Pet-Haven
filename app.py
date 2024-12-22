# from flask import Flask, render_template, request, redirect, url_for
# app=Flask(__name__)
# import sql_alchemy 
# @app.route('/')
# def home():
#     return render_template('index.html')
# @app.route('/register', methods=['POST'])
# def register():
#     name = request.form['name']
#     email = request.form['email']
#     breed = request.form['breed']
#     age = request.form['age']
#     return render_template('register.html', name=name, email=email, breed=breed, age=age)
# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, render_template, request, redirect, url_for, flash
# import mysql.connector
from flask_sqlalchemy import SQLAlchemy
app=Flask(__name__)
app.secret_key = 'secret'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///infy.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    breed = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    event = db.Column(db.String(100), nullable=False)


@app.route('/')
def home():
    return render_template('index.html')
@app.route('/events')
def events():
    return render_template('events.html')
@app.route('/myevents')
def myevents():
    return render_template('myevents.html')
@app.route('/payments')
def payments():
    return render_template('payments.html')
@app.route('/schedule')
def schedule():
    return render_template('schedule.html')
@app.route('/register', methods=['GET','POST'])
def register():
    # name = request.form['name']
    # email = request.form['email']

    # return render_template('register.html', name=name, email=email, breed=breed, age=age)
        if request.method == 'POST':
            event=request.form['event']
            name = request.form['name']
            # email = request.form['email']
            breed = request.form['breed']
            age = request.form['age']

            if not name or not breed or not age or not event:
                flash("All fields are required!", "danger")
                return render_template('register.html')
        
            try:
                new_user = User(name=name, breed=breed, age=int(age), event=event)
                db.session.add(new_user)
                db.session.commit()
                flash("Registration successfull!", "success")
                return redirect(url_for('home'))
            except Exception as e:
                flash(f"Error: {e}", "danger")
                return redirect(url_for('register'))
    
        return render_template('register.html')

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
