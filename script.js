// Q1) Create your own resume data in JSON format
const resumedata = {
    "name": "gopinath",
    "age": 22,
    "contact": {
      "email": "gopinathgt6@gmail.com",
      "phone": "6380259768"
    },
    "education": [
      {
        "degree": "Bachelor of Science",
        "major": "Computer Science",
        "school": "University of Tech",
        "year": 2015
      },
      {
        "degree": "Master of Science",
        "major": "Software Engineering",
        "school": "Tech Institute",
        "year": 2017
      }
    ],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Solutions",
        "year": "2017-2020"
      },
      {
        "position": "Senior Software Engineer",
        "company": "Innovative Tech",
        "year": "2020-present"
      }
    ],
    "skills": ["JavaScript", "React", "Node.js", "Java", "Python"]
  };
  
  // Q2) Iterate over all for loops (for, for in, for of, forEach)
  // For loop:
  console.log("Using for loop:");
  for (let i = 0; i < resumedata.education.length; i++) {
    console.log(resumedata.education[i]);
  }
  console.log("-------------------------------------------")
  // For In loop:
  console.log("\nUsing for...in loop:");
  for (let key in resumedata.contact) {
    console.log(`${key}: ${resumedata.contact[key]}`);
  }
  console.log("-------------------------------------------")
  // For of loop:
  console.log("\nFor of loop (education):");
  for (let education of resumedata.education) {
    console.log(education);
  }
  
  console.log("\nFor of loop (skills):");
  for (let skill of resumedata.skills) {
    console.log(skill);
  }
  console.log("-------------------------------------------")
  // ForEach loop:
  console.log("\nForEach loop (education):");
  resumedata.education.forEach((edu) => {
    console.log(edu);
  });
  
  console.log("\nForEach loop (skills):");
  resumedata.skills.forEach((skill) => {
    console.log(skill);
  });
  