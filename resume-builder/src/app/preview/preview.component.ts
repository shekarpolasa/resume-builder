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
    email: 'shekarpolasa@gmail.com'
  };
  summaries = [
    'Full stack .Net developer with 10+ years of experience in software design and development of web applications.',
    'Effective team player with exceptional analytical and critical thinking skills and the important ability to function well in deadline-driven business environments.'
  ];

  employmentHistory = [
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
  ];

  academicHistory = [
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
  ];

  skills = ['C#', '.Net 6', '.Net Core', 'Web API', 'Angular', 'SQL server', 'HTML', 'CSS', 'Kafka', 'Kibana', 'Jaeger', 'Git',
    'Azure', 'Micro-services', 'Entity Framework'];

  awards = [
    'Awarded as <b>Best Emerging Techie</b> for the year 2013',
    'Awarded as <b>Employee of the Year</b> for the year 2018'
  ];

  languages = ['English', 'Telugu', 'Hindi'];

  constructor() { }

  ngOnInit(): void {
  }

}
