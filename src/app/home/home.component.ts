import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { SKILLS } from '../skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    console.log(this.frontendSkills)
  }
  
  allSkills = this.skillsService.getSkills();

  frontendSkills = this.allSkills.filter(function(skill){
    return skill.area === 'frontend'
  })

  backendSkills = this.allSkills.filter(function(skill){
    return skill.area === 'backend'
  })

  projectManagementSkills = this.allSkills.filter(function(skill){
    return skill.area === 'projectManagement'
  })
}
