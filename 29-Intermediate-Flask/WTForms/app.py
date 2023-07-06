from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import *
from forms import AddSnackForm, EmployeeForm

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///employees_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'SushiSushi!'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/phones')
def list_phones():
    emps = Employee.query.all()
    return render_template('phones.html', emps=emps)

@app.route('/snacks/new', methods=["GET", "POST"])
def add_snack():
    form = AddSnackForm()
    if form.validate_on_submit():
        name = form.name.data
        price = form.price.data
        flash(f"Created new snack: name: {name}, price: ${price}")
        return redirect('/')
    else:
        return render_template("add_snack_form.html", form=form)
    
@app.route('/employees/new', methods=["GET", "POST"])
def add_employee():
    form = EmployeeForm()
    depts = db.session.query(Department.dept_code, Department.dept_name)
    depts = [(dept.dept_code, dept.dept_name) for dept in depts]
    form.dept_code.choices = depts
    if form.validate_on_submit():
        name = form.name.data
        state = form.state.data
        dept_code = form.dept_code.data

        emp = Employee(name=name, state=state, dept_code=dept_code)
        db.session.add(emp)
        db.session.commit()
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template('add_employee_form.html', form=form)

@app.route("/employees/<int:id>/edit", methods=["GET", "POST"])
def edit_employee(id):
    employee = Employee.query.get_or_404(id)
    form = EmployeeForm(obj=employee)
    depts = db.session.query(Department.dept_code, Department.dept_name)
    depts = [(dept.dept_code, dept.dept_name) for dept in depts]
    form.dept_code.choices = depts

    if form.validate_on_submit():
        employee.name = form.name.data
        employee.state = form.state.data
        employee.dept_code = form.dept_code.data
        db.session.commit()
        return redirect('/phones')
    else:
        return render_template("edit_employee_form.html", form=form)