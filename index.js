let Skills = ["HTML", "CSS"];

function addSkill(skillName){
    Skills.unshift(skillName);
}

addSkill("js");

console.log(Skills);

function removeFirstSkill(){ 
Skills.shift();
}
removeFirstSkill();

console.log(Skills);