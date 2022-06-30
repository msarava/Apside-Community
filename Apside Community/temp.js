const projects = require('./data/project.json');
const collaborators = require('./data/collaborator.json');
const fs = require('fs');

const collaboratorProjectManagerID = collaborators
  .filter((el) => el.job_title == 'project manager')
  .map((el) => el.id);

const getRandomId = (ids) => {
  return ids[Math.floor(Math.random() * ids.length)];
};
//console.log(getRandomId(collaboratorProjectManagerID));

const projectsUpdate = projects.map((project) => {
  return { ...project, manager: getRandomId(collaboratorProjectManagerID) };
});

fs.appendFile('project2.json', JSON.stringify(projectsUpdate), (error) => {
  if (error) throw error;
  console.log('tout est ok');
});
