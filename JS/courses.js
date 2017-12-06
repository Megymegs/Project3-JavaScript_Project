var Course = function(title, description, duration, cost){
    this.title = title,
    this.description = description,
    this.duration = duration,
    this.cost = cost
    getCourseInfo = function(){
          return 'Title: &nbsp;' + this.title + '<br>Description: &nbsp;' + this.description + '<br>Duration: &nbsp;' + this.duration + '<br>Cost: &nbsp;' + this.cost;
      }

      console.log(getCourseInfo)
}

var webPages = new Course('Web Pages', 'Code a simple one-page website using HTML and JQuery', '3 hours', 'R250');

var music = new Course('Music', 'Code a song using SonicPi software on a Raspberry Pi computer.', '3 hours', 'R250');

var twoD = new Course('Web Pages', 'Create a 2D animation using coding language JavaScript.', '3 hours', 'R250');

var media = new Course('Web Pages', 'Learn how the internet works and code a simple one-page website using HTML, CSS and JQuery.', '3 Days', 'R960');

var musicRas = new Course('Music', 'Learn computer science principles by coding music with a Raspberry Pi computer.', '3 Days', 'R960');

var animation = new Course('Animation', 'Learn computer science principles by coding animations using JavaScript.', '3 Days', 'R960');

var developer = new Course('Developer', 'Learn how to set up a development environment and practical skills to start coding.', '3 hours', 'R250');

var jScript = new Course('JavaScript','Develop a basic proficiency in programming structures and methods in JavaScript so that you are able to create an interactive web application.','6 Days','R1800')

var frontDev = new Course('Front End Web Development','Develop a good proficiency in CSS and an understanding of web design principles so that you are able to create visually pleasing web pages.','6 Days','R1800')

var python = new Course('Python','Develop a basic proficiency in programming principles and methods in Python.','6 Days','R1800')

var fullStack = new Course('Full Stack JavaScript','Develop an understanding of the front and backend development environment and basic proficiency in server side JavaScript and object-oriented programming. By the end of the course you will be able to architect an application, control flow in an application and persist and retrieve data in a database.','6 Days','R1800')

var webDep = new Course ('Website Deployment','Learn how to manage and deploy code to a server environment so that you can host your own web pages.','4 Days','R1200')

var inno = new Course ('Innovation Challenge','Develop an understanding of the front and backend development environment and basic proficiency in server side JavaScript and object-oriented programming. By the end of the course you will be able to architect an application, control flow in an application and persist and retrieve data in a database.','6 Days','R1800')

var storm = new Course ('CodeStorm','Work in groups to create and present a code project that addresses a particular issue.','5 Days','R1500')

var Hackathon = new Course ('Hackathon','Learn how to manage and deploy code to a server environment so that you can host your own web pages.','TBC','TBC')

var immerse = new Course ('Industry Immersion','Spend a week at a tech company and gain experience in industry.','5 Days','R1500')

var convo = new Course ('Code Conversation','Learn about tech careers from a panel of working professionals who will share their experiences with you.','1 Day','R300')

var present = new Course ('Presentation Skills','Learn how to present an idea or project in a compelling manner.','1 Day','R300')

var linked = new Course ('CV & LinkedIn','Learn how to present your skills effectively.','1 Day','R300')

var network = new Course ('Networking','Learn how to present yourself professionally when networking and put your skills to the test by attending local tech events. You will attend a training session and attend one event of your choice.','2 Days','R300')

var digiCom = new Course ('Digital Communication Skills','Learn how to communicate and collaborate in a 21st century work environment using digital workplace tools.','1 Day','R300')

var study = new Course ('Applying to Tertiary Studies','Make informed decisions about your future studies.','1 Day','R300')


$(function(){
  $("#WebDisplay1").click(function(){
    $("#intoWebPages").append(
      getCourseInfo(webPages)
    )
  })
});

$(function(){
  $("#WebDisplay2").click(function(){
    $("#create").append(
      getCourseInfo(music)
    )
  })
});

$(function(){
  $("#WebDisplay3").click(function(){
    $("#createWeb").append(
      getCourseInfo(twoD)
    )
  })
});

// $("#WebDisplay3").click(function (){
// 	$("#createWeb").show();
// 	message = getintroReport(intro[3]);
// 	print(message);
// 	});
//
// $("#MusicDisplay1").click(function (){
// 	$("#intoMusic").show();
// 	message = getintroReport(intro[1]);
// 	print(message);
// 	});
//
// $("#MusicDisplay2").click(function (){
// 	$("#createMusic").show();
// 	message = getintroReport(intro[4]);
// 	print(message);
// 	});
//
//
// $("#MoreDisplay1").click(function (){
// 	$("#anime").show();
// 	message = getintroReport(intro[5]);
// 	print(message);
// 	});
//
// $("#MoreDisplay2").click(function (){
// 	$("#dev").show();
// 	message = getintroReport(intro[6]);
// 	print(message);
// 	});
//
// function getbeginnerReport(beginner){
//   let report = '<h4><ins> Focus: &nbsp;' + beginner.title + '</ins></h4></br>';
//   report +=  '<p><ins>Goal:</ins>  &nbsp;' + beginner.description + '</p>';
//   report +=  '<p><ins>Time:</ins> &nbsp;' + beginner.duration  +'</p>';
//   report +=  '<p><ins>Cost:</ins> &nbsp;' + beginner.cost + '</p>',
//   report +=  '<p><button id="join"> Sign Up </button></p>'
//
//   return report;
// }
//
// $("#beginnerDisplay1").click(function (){
// 	$("#js").show();
// 	message = getbeginnerReport(beginner[0]);
// 	print(message);
// 	});
//
// $("#beginnerDisplay2").click(function (){
// 	$("#front-end").show();
// 	message = getbeginnerReport(beginner[1]);
// 	print(message);
// 	});
//
//
// $("#beginnerDisplay3").click(function (){
// 	$("#python").show();
// 	message = getbeginnerReport(beginner[2]);
// 	print(message);
// 	});
//
// function getintermediateReport(intermediate){
//   let report = '<h4><ins> Focus: &nbsp;' + intermediate.title + '</ins></h4></br>';
//   report +=  '<p><ins>Goal:</ins>  &nbsp;' + intermediate.description + '</p>';
//   report +=  '<p><ins>Time:</ins> &nbsp;' + intermediate.duration  +'</p>';
//   report +=  '<p><ins>Cost:</ins> &nbsp;' + intermediate.cost + '</p>',
//   report +=  '<p><button id="join"> Sign Up </button></p>'
//
//   return report;
// }
//
// $("#intermediateDisplay1").click(function (){
// 	$("#FulSt").show();
// 	message = getintermediateReport(intermediate[0]);
// 	print(message);
// 	});
//
// $("#intermediateDisplay2").click(function (){
// 	$("#Web-Dep").show();
// 	message = getintermediateReport(intermediate[1]);
// 	print(message);
// 	});
//
// function getsocialReport(social){
//   let report = '<h4><ins> Focus: &nbsp;' + social.title + '</ins></h4></br>';
//   report +=  '<p><ins>Goal:</ins>  &nbsp;' + social.description + '</p>';
//   report +=  '<p><ins>Time:</ins> &nbsp;' + social.duration  +'</p>';
//   report +=  '<p><ins>Cost:</ins> &nbsp;' + social.cost + '</p>',
//   report +=  '<p><button id="join"> Sign Up </button></p>'
//
//   return report;
// }
//
// $("#socialDisplay1").click(function (){
// 	$("#Inno").show();
// 	message = getsocialReport(social[0]);
// 	print(message);
// 	});
//
// $("#socialDisplay2").click(function (){
// 	$("#Storm").show();
// 	message = getsocialReport(social[1]);
// 	print(message);
// 	});
//
// $("#socialDisplay3").click(function (){
// 	$("#Hack").show();
// 	message = getsocialReport(social[2]);
// 	print(message);
// 	});
//
// $("#socialDisplay4").click(function (){
// 	$("#Ind").show();
// 	message = getsocialReport(social[3]);
// 	print(message);
// 	});
//
// function getcareerReport(career){
//   let report = '<h4><ins> Focus: &nbsp;' + career.title + '</ins></h4></br>';
//   report +=  '<p><ins>Goal:</ins>  &nbsp;' + career.description + '</p>';
//   report +=  '<p><ins>Time:</ins> &nbsp;' + career.duration  +'</p>';
//   report +=  '<p><ins>Cost:</ins> &nbsp;' + career.cost + '</p>',
//   report +=  '<p><button id="join"> Sign Up </button></p>'
//
//   return report;
// }
//
// $("#socialDisplay1").click(function (){
// 	$("#FulSt").show();
// 	message = getcareerReport(career[0]);
// 	print(message);
// 	});
//
// $("#socialDisplay2").click(function (){
// 	$("#Web-Dep").show();
// 	message = getcareerReport(career[1]);
// 	print(message);
// 	});
//
// $("#socialDisplay3").click(function (){
// 	$("#FulSt").show();
// 	message = getcareerReport(career[2]);
// 	print(message);
// 	});
//
// $("#socialDisplay4").click(function (){
// 	$("#Web-Dep").show();
// 	message = getcareerReport(career[3]);
// 	print(message);
// 	});
//
// $("#socialDispla5").click(function (){
// 	$("#Web-Dep").show();
// 	message = getcareerReport(career[4]);
// 	print(message);
// 	});
//
// $("#socialDisplay6").click(function (){
// 	$("#Web-Dep").show();
// 	message = getcareerReport(career[5]);
// 	print(message);
// 	});
