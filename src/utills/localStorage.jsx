// localStorage.clear();
 
 const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 3,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Website Banner",
        description: "Change the homepage banner to the new summer sale graphic.",
        date: "2025-05-25",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Login Bug",
        description: "Resolve the login session expiration issue.",
        date: "2025-05-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Report Draft",
        description: "Prepare a preliminary report for the ABC Corp project.",
        date: "2025-05-22",
        category: "Reporting"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "e2@e.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 2,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Perform weekly database backup for all clients.",
        date: "2025-05-26",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Optimization",
        description: "Update meta tags and content for SEO performance.",
        date: "2025-05-21",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Presentation",
        description: "Present the roadmap to the team in the weekly meeting.",
        date: "2025-05-23",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Email Campaign Setup",
        description: "Schedule and configure the newsletter campaign.",
        date: "2025-05-24",
        category: "Marketing"
      }
    ]
  },
  {
    id: 3,
    firstName: "Kunal",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Testing",
        description: "Test user interface across different devices and browsers.",
        date: "2025-05-26",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy New Version",
        description: "Deployment of v2.3 to production servers failed.",
        date: "2025-05-24",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fix Sprint",
        description: "Fix priority 1 and 2 bugs before the next release.",
        date: "2025-05-22",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 2,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research Automation Tools",
        description: "Compare automation frameworks for future projects.",
        date: "2025-05-25",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Customer Feedback Analysis",
        description: "Analyze recent survey responses.",
        date: "2025-05-20",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Blog Post",
        description: "Create a blog post about our new service offerings.",
        date: "2025-05-19",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Cleanup Script",
        description: "Script failed during data migration test.",
        date: "2025-05-21",
        category: "Development"
      }
    ]
  },
  {
    id: 5,
    firstName: "Riya",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client Demo Prep",
        description: "Get demo ready for upcoming client meeting.",
        date: "2025-05-26",
        category: "Client Relations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Internal Newsletter",
        description: "Write and send the monthly internal newsletter.",
        date: "2025-05-22",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server Security Audit",
        description: "Audit postponed due to server access issues.",
        date: "2025-05-23",
        category: "Security"
      }
    ]
  }
];



  const admin =  {
    id: 1,
    firstName: "Admin",
    email: "admin@me.com",
    password: "123"
  }
export const setLocalStorage = () =>{
     localStorage.setItem('employees', JSON.stringify (employees))
      localStorage.setItem('admin', JSON.stringify (admin))
}
export const getLocalStorage = ()=>{
 const employees= JSON.parse (localStorage.getItem('employees'))
  const admin= JSON.parse (localStorage.getItem('admin'))
 return {employees,admin}

}



