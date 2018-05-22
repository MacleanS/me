import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { SKILLS } from '../skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animationClass: {[k: string]: any} = {};

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {

    this.animationClass.imageContainer = 'fade-in-image';
    this.animationClass.image = 'swell-image'
    
    setTimeout(()=>{
      this.animationClass.text = 'fade-in-text'
      this.animationClass.skills = 'fade-in-image'
      this.animationClass.imageContainer = '';
      this.animationClass.image = '';
    },1000);
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
