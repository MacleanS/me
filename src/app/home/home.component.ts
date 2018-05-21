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
    this.animationClass.image = 'fade-in-image'
    // setTimeout(()=> {
    //   this.animationClass.image = 'fade-in-image';
    // },300)
    
    setTimeout(()=>{
      this.animationClass.text = 'fade-in-text'
      this.animationClass.image = '';
      this.animationClass.skills = 'fade-in-image'
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
