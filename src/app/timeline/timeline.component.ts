import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   timeline = [
    {
      date: 'Oct 2017 - Present',
      position: 'left',
      description: {
        place: 'Kobas',
        role: 'Software Engineer',
        info: `Responsible for developing and maintaining the cloud interface of the Kobas product, which has a wide range of uses. Clients use the product to configure EPoS interfaces, manage staff timesheets, manage products/stock, and retrieve reports on venue performance.
        The tech stack is AngularJS 1.5+ as well as the classic LAMP stack.`
      }
    }, {
      date: 'Nov 2016 - Oct 2017',
      position: 'right',
      description: {
        place: 'Aimia',
        role: 'Full Stack Developer',
        info: 'Involved in prototype analytical app development within the "R&D Analytics" team. The team is responsible for quickly developing analytical applications which are typically built in HTML/javaScript (front end), with analytics built in R, SQL, or Python. Current projects include a product recommendation engine, and a campaign execution tool, both which will use machine learning to generate optimal outputs. More recent projects are built using Angular 2 as a framework.' 
      }
    }, {
      date: 'Aug 2014 - Nov 2016',
      position: 'left',
      description: {
        place: 'Aimia',
        role: 'Lead Analyst',
        info: 'Situated within the "Advanced Analytics" team within Aimia, and part of the R&D venture, "Seeds2Saplings". Responsible for the speedy development of analytical product prototypes and automation, built in a combination of R/SQL/Shiny, SQL/VBA/Excel, R/SQL/JavaScript/HTML/CSS.'
      }
    }, {
      date: 'Jul 2013 - Aug 2014',
      position: 'right',
      description: {
        place: 'Aimia',
        role: 'Solutions Analyst',
        info: `Involved in the design and implementation a retrospective customer control group builder macro in SQL intended for use in non-targeted media campaigns.
        Currently support and develop SQL scripts that lie behind Aimia's analytical product "Self Serve", which is used to visualise shopping data for a number of retail clients.`
      }
    }, {
      date: 'Dec 2011 - Jul 2013',
      position: 'left',
      description: {
        place: 'Aimia',
        role: 'Analyst',
        info: `Segmentation, extraction, and analysis of targeted communication campaigns, such as email, direct mail, or coupon at till, using SQL.
        Improved efficiency of regular internal processes by automating them with VBA macros.`
      }
    }, {
      date: '2007 - 2011',
      position: 'right',
      description: {
        place: 'University College London',
        role: 'Student',
        info: 'Master of Science (MSci) Physics - 2:1'
      }
    }
  ]
}
