from models import Department, Employee, db, Project, EmployeeProject
from app import app

db.drop_all()
db.create_all()

d1 = Department(dept_code="mktg", dept_name="Marketing", phone="987-9999")
d2 = Department(dept_code="acct", dept_name="Accounting", phone="111-2345")
d3 = Department(dept_code="it", dept_name="Information Technology", phone="727-1234")
d4 = Department(dept_code="sales", dept_name="Sales", phone="567-8976")
d5 = Department(dept_code="r&d", dept_name="Research and Development", phone="147-2468")

jack = Employee(name="Jack Wyoming", state='NY', dept_code="mktg")
autumn = Employee(name="Autumn Fall", state='CA', dept_code="mktg")
kyle = Employee(name="Kyle Monster", state='TX', dept_code="acct")
jordan = Employee(name="Jordan Balls", state='AL', dept_code="acct")
jimmy = Employee(name="Jimmy What", state='MA', dept_code="it")
justin = Employee(name="Justin Time", state='CO', dept_code="it")
connor = Employee(name="Connor Deez", state='ID', dept_code="sales")
courtney = Employee(name="Courtney Falls", state='OR', dept_code="sales")
maddison = Employee(name="Maddison Jump", state='AZ', dept_code="r&d")
stephanie = Employee(name="Stephanie Skip", state='NC', dept_code="r&d")
joseph = Employee(name="Joseph Jo", state='NY')

server = Project(proj_code="server", proj_name="Deploy Server")
car = Project(proj_code="car", proj_name="Design Car")

emp1 = EmployeeProject(emp_id=1, proj_code="server", role="Leader")
emp2 = EmployeeProject(emp_id=2, proj_code="car", role="Leader")
emp3 = EmployeeProject(emp_id=3, proj_code="car", role="Co-Leader")
emp4 = EmployeeProject(emp_id=4, proj_code="server", role="Co-Leader")

db.session.add_all([d1, d2, d3, d4, d5])
db.session.commit()

db.session.add_all([server, car])
db.session.commit()

db.session.add_all([jack, autumn, kyle, jordan, jimmy, justin, connor, courtney, maddison, stephanie, joseph])
db.session.commit()

db.session.add_all([emp1, emp2, emp3, emp4])
db.session.commit()
