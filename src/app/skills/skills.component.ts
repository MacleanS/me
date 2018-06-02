import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
  }

  allSkills = this.skillsService.getSkills();

  frontendSkills = this.allSkills.filter(function(skill) {
    return skill.area === 'frontend'
  })

  backendSkills = this.allSkills.filter(function(skill) {
    return skill.area === 'backend'
  })

  projectManagementSkills = this.allSkills.filter(function(skill) {
    return skill.area === 'projectManagement'
  })
}
