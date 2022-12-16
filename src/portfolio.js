/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Xiang Yong",
  logo_name: "cheng.xy()",
  nickname: "xy",
  full_name: "Xiang Yong",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/156bue5aYjoj921DMdLGbP8IhbMW1KuBl/edit?usp=sharing&ouid=104837421351277061787&rtpof=true&sd=true",
  mail: "mailto:seanchengxy13@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/seancxy",
  linkedin: "https://www.linkedin.com/in/chengxy/",
  gmail: "seanchengxy13@gmail.com",
  instagram: "https://www.instagram.com/scxxy/",
};

const skills = {
  data: [
    {
      title: "Languages & Databases",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Tools and FrameWorks",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD1B16",
          },
        },
        {
          skillName: "Ionic",
          fontAwesomeClassname: "simple-icons:ionic",
          style: {
            color: "#498AFF",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Singapore",
      subtitle: "Bachelor of Computing in Information Systems",
      logo_path: "nus.png",
      alt_name: "NUS",
      duration: "2020 - Present",
      descriptions: [
        "Currently pursuing my bachelors in Information Systems.",
        "Relevant Coursework",
        "• IT Project Management",
        "• Data Structures & Algorithm",
        "• Enterprise Systems Server-Side Design and Development",
        "• Database Systems",
        "• Agile IT with DevOps",
      ],
      website_link: "https://www.comp.nus.edu.sg/programmes/ug/is/",
    },
    {
      title: "Singapore Polytechnic",
      subtitle: "Diploma in Businss & Information Technology",
      logo_path: "sp.png",
      alt_name: "SP",
      duration: "2015 - 2018",
      descriptions: [
        "• Graduated with Diploma with Merit",
        "• Developer in the DBIT Mobile App Challenge",
        "• CCA Certificate of Attainment - Gold",
        "• DMIT Stars club member",
      ],
      website_link: "https://www.sp.edu.sg/soc",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed a few internships and I am actively looking for internships. I volunteer frequently and love giving back to the community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Teaching Assistant",
          company: "NUS School of Computing",
          company_url: "https://www.comp.nus.edu.sg/",
          logo_path: "soc.png",
          duration: "Aug 2022 - Dec 2022",
          location: "Kent Ridge, Singapore",
          description: [
            "• Assisted in the development and maintenance of a file management platform. ",
            "• Investigated all reported user issues and amended existing code accordingly. ",
            "• Supported data migration and data patching user requests",
          ],
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "National Computer Systems Group",
          company_url: "https://www.ncs.co/en-sg/",
          logo_path: "ncs.png",
          duration: "May 2022 - Aug 2022",
          location: "Ang Mo Kio, Singapore",
          description: [
            "• Assisted in the development and maintenance of a file management platform. ",
            "• Investigated all reported user issues and amended existing code accordingly. ",
            "• Supported data migration and data patching user requests",
          ],
          color: "#0071C5",
        },
        {
          title: "Data Analyst",
          company: "City Developments Limited",
          company_url: "https://cdl.com.sg/",
          logo_path: "cdl.png",
          duration: "Apr 2017 - Aug 2017",
          location: "Raffles Place, Singapore",
          description: [
            "• Designed and created operational dashboards for service management using Tableau and SAP ",
            "• Generated data insights impacting operational and tactical decision making for several departments",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Volunteer",
          company: "NUS Students' Community Service Club",
          company_url: "https://nus-csc.org/",
          logo_path: "csc.png",
          duration: "Feb 2021 - Present",
          location: "Commonwealth, Singapore",
          description: [
            "I am an active member of the L-derly befrienders program by NUS CSC, where we reach out to elderly beneficiaries weekly to assist them with chores and engage with them to uplift their spirits.",
          ],
          color: "#FBBD18",
        },
        {
          title: "Student Volunteer",
          company: "Singapore Polytechnic",
          company_url: "https://www.sp.edu.sg/",
          logo_path: "sp.png",
          duration: "Sep 2016 - October 2016",
          location: "Bangkok, Thailand",
          description: [
            "Part of the Learning Express program. I played an active role in an overseas community service program to rural Thailand, Bangkok to help improve daily living conditions.",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of technology frameworks. I am familiar with Jakarta EE, RESTful web services, Python Scripts, ReactJS and Angular. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "xy.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Hotel Booking ",
      url: "https://github.com/seancxy/Hotel",
      description:
        "A backend project with CLI that uses a 3-tier architecture to implement hotel bookings. EJB, Timers and JPA were used to fulfil business rules of hotel bookings.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "1",
      name: "personal-portfolio",
      url: "https://github.com/seancxy/Personal-Website",
      description:
        "A personal website done in ReactJs to showcase my work experience, credentials and projects.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
        {
          name: "ReactJS",
          iconifyClass: "simple-icons:react",
        },
      ],
    },
    {
      id: "2",
      name: "Study Buddy (Backend)",
      url: "https://github.com/seancxy/StudyBuddy",
      description:
        "StudyBuddy is an application to make finding project mates easy. This application has a server-based interface for administrators of the application to manage the users and the modules.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
      ],
    },
    {
      id: "3",
      name: "Study Buddy (Frontend)",
      url: "https://github.com/seancxy/StudyBuddyIonic",
      description:
        "StudyBuddy is an application to make finding project mates easy. This application has features like searching/applying groups for modules, chats, uploading files and kanban boards.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
        {
          name: "HTML5",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "CSS3",
          iconifyClass: "fa-css3",
        },
        {
          name: "Angular",
          iconifyClass: "logos-ionic",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
