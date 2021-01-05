var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "password1",
  database: "staff_DB"
});


connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employee's By Roles",
        "View all Employees By Departments",
        "Update Employee",
        "Add Employee",
        "Add Role",
        "Add Department",
        "EXIT"
      ]
    })
    .then(function (answer) {
      if (answer.choice === "View All Employees") {
        viewEmployee();
      }
      else if (answer.choice === "View All Employee's by Roles") {
        viewRole();
      }
      else if (answer.choice === "View all Employees By Departments") {
        viewDepartment();
      }
      else if (answer.choice === "Update Employee") {
        updateEmployee();
      }
      else if (answer.choice === "Add Employee") {
        addEmployee();
      }
      else if (answer.choice === "Add Role") {
        addRole();
      }
      else if (answer.choice === "Add Department") {
        addDepartment();
      }
      else {
        connection.end();
      }
    });
}

function viewEmployee() {
  connection.query('SELECT * FROM employee',
    function (err, res) {
      if (err) throw err;
      console.table(res),
        runSearch()
    })
};

function viewRole() {
  connection.query(`SELECT * FROM role`,
    function (err, res) {
      if (err) throw err;
      console.table(res),
        runSearch()
    });
}

function viewDepartment() {
  connection.query(`SELECT * FROM department`,
    function (err, res) {
      if (err) throw err;
      console.table(res),
        runSearch()
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        title: "title",
        type: "input",
        message: "What is the new title?",
      },
      {
        salary: "salary",
        type: "input",
        message: "What is the title's salary?",
      },
      {
        role_id: "department_id",
        type: "input",
        message: "What department do the belong to?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id,
        },
        function (err) {
          if (err) throw err;
          console.log("New role has been added!");
          runSearch();
        }
      )
    })
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is their first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is their last name?",
      },
      {
        name: "role_id",
        type: "list",
        message: "What is their role?",
        choices: ["Sales", "Software Engineer", "Manager"]
      },
      {
        name: "manager_id",
        type: "list",
        message: "Who is their manager?",
        choices: ["Bill"]
      },
    ])
    .then(function (answer) {
      let roleInt = 0
      if (answer.role_id === "Manager") {
        roleInt = 1
      } else if (answer.role_id === "Software Engineer") {
        roleInt = 2
      }
      let managerInt = 0
      if (answer.manager_id === "Bill") {
        managerInt = 1
      }

      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: roleInt,
          manager_id: managerInt
        },
        function (err) {
          if (err) throw err;
          console.log("New employee has been added!");
          runSearch();
        }
      )
    })
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the new department?",
      }
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          name: answer.name,
        },
        function (err) {
          if (err) throw err;
          console.log("New department has been added!");
          runSearch();
        }
      )
    })
}

function updateEmployee() 

{ // build an inquirer
  // select the employee to update connection query of all employees
  // select from choices to update role 
  // select * from employee
  connection.query("UPDATE employee SET ? WHERE ?"
  [
    {
      first_name: ""
    },
    {
      last_name: ""
    },
    {
      role_id: ""
    },
    {
      department_id: ""
    }
  ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee updated!\n");
      runSearch();
    }
  )
}