// Move between sections
document.getElementById("nextToEducation").addEventListener("click", function() {
  document.getElementById("personalInfoSection").style.display = "none";
  document.getElementById("educationSection").style.display = "block";
});

document.getElementById("previousToPersonalInfo").addEventListener("click", function() {
  document.getElementById("educationSection").style.display = "none";
  document.getElementById("personalInfoSection").style.display = "block";
});

document.getElementById("nextToExperience").addEventListener("click", function() {
  document.getElementById("educationSection").style.display = "none";
  document.getElementById("experienceSection").style.display = "block";
});

document.getElementById("previousToEducation").addEventListener("click", function() {
  document.getElementById("experienceSection").style.display = "none";
  document.getElementById("educationSection").style.display = "block";
});

document.getElementById("nextToProjects").addEventListener("click", function() {
  document.getElementById("experienceSection").style.display = "none";
  document.getElementById("projectsSection").style.display = "block";
});

document.getElementById("previousToExperience").addEventListener("click", function() {
  document.getElementById("projectsSection").style.display = "none";
  document.getElementById("experienceSection").style.display = "block";
});

document.getElementById("nextToTechnicalSkills").addEventListener("click", function() {
  document.getElementById("projectsSection").style.display = "none";
  document.getElementById("technicalSkillsSection").style.display = "block";
});

document.getElementById("previousToProjects").addEventListener("click", function() {
  document.getElementById("technicalSkillsSection").style.display = "none";
  document.getElementById("projectsSection").style.display = "block";
});


// Display entered details dynamically
document.getElementById("resumeForm").addEventListener("input", function() {
  document.getElementById("nameDisplay").textContent = document.getElementById("fullName").value;
  document.getElementById("contactDisplay").textContent = `${document.getElementById("phone").value} | ${document.getElementById("email").value} | ${document.getElementById("linkedin").value} | ${document.getElementById("github").value}`;
});

// Function to add new education block
document.querySelector('.addEducation').addEventListener('click', function() {
  const school = document.getElementById("school").value;
  const location = document.getElementById("location").value;
  const degree = document.getElementById("degree").value;
  const duration = document.getElementById("duration").value;

  // Construct education block for display
  const educationBlock = `
      <div class="schoolLocation">
          <span class="schoolDisplay">${school}</span>
          <span class="locationDisplay">${location}</span>
      </div>
      <i class="degreeDisplay">${degree}</i><br>
      <span class="eduDurationDisplay">${duration}</span><br><br>
  `;

  // Add the new block to the resume display
  document.getElementById("educationDisplay").innerHTML += educationBlock;

  // Clear the form inputs
  document.getElementById("school").value = '';
  document.getElementById("location").value = '';
  document.getElementById("degree").value = '';
  document.getElementById("duration").value = '';
});

// Function to add new experience block
document.querySelector('.addExperience').addEventListener('click', function() {
  const company = document.getElementById("company").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const expLocation = document.getElementById("expLocation").value;
  const expDuration = document.getElementById("expDuration").value;
  const expDescription = document.getElementById("expDescription").value;

  // Construct experience block for display
  const experienceBlock = `
      <div class="companyLocation">
          <span class="companyDisplay">${company}</span>
          <span class="expLocationDisplay">${expLocation}</span>
      </div>
      <i class="jobTitleDisplay">${jobTitle}</i><br>
      <span class="expDurationDisplay">${expDuration}</span><br>
      <p class="expDescriptionDisplay">${expDescription}</p>
  `;

  // Add the new block to the resume display
  document.getElementById("experienceDisplay").innerHTML += experienceBlock;

  // Clear the form inputs
  document.getElementById("company").value = '';
  document.getElementById("jobTitle").value = '';
  document.getElementById("expLocation").value = '';
  document.getElementById("expDuration").value = '';
  document.getElementById("expDescription").value = '';
});

// Function to add new project block
document.querySelector('.addProject').addEventListener('click', function() {
  const projectTitle = document.getElementById("projectTitle").value;
  const techStack = document.getElementById("techStack").value;
  const projectDuration = document.getElementById("projectDuration").value;
  const projectDescription = document.getElementById("projectDescription").value;

  // Construct project block for display
  const projectBlock = `
      <div class="projectTitleDuration">
          <span class="projectTitleDisplay">${projectTitle}</span> | <span class="techStackDisplay">${techStack}</span> <br> <span class="projectDurationDisplay">${projectDuration}</span>
      </div>
      <p class="projectDescriptionDisplay">${projectDescription}</p>
  `;

  // Add the new block to the resume display
  document.getElementById("projectsDisplay").innerHTML += projectBlock;

  // Clear the form inputs
  document.getElementById("projectTitle").value = '';
  document.getElementById("techStack").value = '';
  document.getElementById("projectDuration").value = '';
  document.getElementById("projectDescription").value = '';
});



// Add Skills
document.getElementById("addSkills").addEventListener("click", function() {
  const languages = document.getElementById("languages").value;
  const frameworks = document.getElementById("frameworks").value;
  const developerTools = document.getElementById("developerTools").value;
  const libraries = document.getElementById("libraries").value;

  // Append the skills entered by user
  if (languages) {
    document.getElementById("languagesDisplay").textContent += ` ${languages},`;
  }
  if (frameworks) {
    document.getElementById("frameworksDisplay").textContent += ` ${frameworks},`;
  }
  if (developerTools) {
    document.getElementById("developerToolsDisplay").textContent += ` ${developerTools},`;
  }
  if (libraries) {
    document.getElementById("librariesDisplay").textContent += ` ${libraries},`;
  }
  

  // Clear the form inputs
  document.getElementById("languages").value = '';
  document.getElementById("frameworks").value = '';
  document.getElementById("developerTools").value = '';
  document.getElementById("libraries").value = '';
});






// Download resume as PDF using html2canvas and jsPDF
document.getElementById("downloadPdf").addEventListener("click", function() {
  html2canvas(document.getElementById("resumeDisplay")).then(canvas => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Convert canvas to an image
    const imgData = canvas.toDataURL('image/png');

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210mm x 297mm

    // Save the PDF
    pdf.save('resume.pdf');
  });
});





// // Toggle dropdown functionality for smaller screens
// const dropdowns = document.querySelectorAll('.triggerDrop');

// dropdowns.addEventListener('click', function () {
//     this.style.display === 'block' ? 'none' : 'block';
// })


const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

