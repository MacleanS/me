import { Injectable } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = SKILLS;
  
  getSkills(): Skill[] {
    return this.skills;
  }
}
