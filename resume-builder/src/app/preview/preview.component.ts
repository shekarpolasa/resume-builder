import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  profile = {
    name: 'SHEKAR POLASA',
    role: '.Net Full Stack Developer',
    mobile: '+91 9701696460',
    email: 'shekarpolasa@gmail.com',
    summaries: [
      'Full stack .Net developer with 10+ years of experience in software design and development of web applications.',
      'Effective team player with exceptional analytical and critical thinking skills and the important ability to function well in deadline-driven business environments.'
    ],
    skills: ['C#', '.Net 6', '.Net Core', 'Web API', 'Angular', 'SQL server', 'HTML', 'CSS', 'Kafka', 'Kibana', 'Jaeger', 'Git',
      'Azure', 'Micro-services', 'Entity Framework'
    ],
    awards: [
      'Awarded as <b>Best Emerging Techie</b> for the year 2013',
      'Awarded as <b>Employee of the Year</b> for the year 2018'
    ],
    languages: ['English', 'Telugu', 'Hindi'],
    employmentHistory: [
      {
        organization: 'Ivy Software Development Services Pvt Ltd',
        role: 'Senior Systems Analyst',
        period: 'Oct 2021 - Present',
      },
      {
        organization: 'ACS Solutions',
        role: 'Principal Software Engineer',
        period: 'Jun 2015 -  Oct 2021',
      },
      {
        organization: 'Seanergy Softech Pvt Ltd',
        role: 'Software Engineer',
        period: 'Sep 2012 - May 2015',
      }
    ],
    academicHistory: [
      {
        degree: 'BCA',
        college: 'VNSGU (Veer Narmad South Gujarat University), Gujarat',
        period: '2009 - 2012'
      },
      {
        degree: 'HSC',
        college: 'T & T V Sarvajanik High School, Gujarat',
        period: '2007 - 2009'
      },
      {
        degree: 'SSC',
        college: 'Sarvajanik High School, Gujarat',
        period: '2006 - 2007'
      }
    ],
    projects: [
      {
        name: 'Bookmaker Based Pricing Engine Service (BPES)',
        role: 'Senior Systems Analyst',
        details: [
          'BPES is a middleware service to provide balanced odds (odds are used to place bets) based on multiple bookmakers data using Quants module. Quants is a mathematical model which generalizes the odds for multiple bookmaker data based on the weightage.'
        ],
        techStack: [
          '.Net 6', 'Web API', 'Confluent Kafka', 'Kibana', 'Jaeger', 'Sql Server 2017'
        ]
      },
      {
        name: 'Tambla',
        role: 'Full Stack .Net Developer',
        details: [
          'Risk management system which allows users to report incidents, hazards and track the reported incidents and hazards. It also allows users to create audits to perform periodic safety checks.'
        ],
        techStack: [
          '.Net core', 'Web API', 'Entity Framework Core', 'Angular 8', 'Material design', 'Sql Server 2014'
        ]
      },
      {
        name: 'Fleet Mobility',
        role: 'Full Stack .Net Developer',
        details: [
          'Admin portal which provides fleet management, fleet leasing services and truck rental solutions. Users can track the Repair Orders performed on a particular vehicle.'
        ],
        techStack: [
          '.NET core', 'Web API', 'Entity Framework Core', 'Angular 6', 'Kendo UI', 'Sql Server 2014'
        ]
      },
      {
        name: 'Potentia',
        role: 'Full Stack .Net Developer',
        details: [
          'A portal providing capabilities to create surveys and analytical reports. There are two modules: Admin and User.',
          'Admin module is used to configure survey details such as questions, weightage, users, etc.',
          'User module is in place to participate in the survey where a list of questions will be displayed to submit the answers.'
        ],
        techStack: [
          'Web API', 'MVC 5', 'Entity Framework', 'Angular 2', 'Sql Server 2014'
        ]
      },
      {
        name: 'Times Manager',
        role: 'Full Stack .Net Developer',
        details: [
          'Times Manager is a web-based application to track tasks and time expenses pertaining to clients or projects.',
          'Users can generate invoices with time and expenses. It can also be useful to track Events, Notes and Documents pertaining to clients or projects.',
          'It includes a Back Office module to track accounts registered and user logins.'
        ],
        techStack: [
          'MVC 4', 'C#', 'Web API', 'JQuery', 'HTML5', 'CSS', 'Sql Server 2008'
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
