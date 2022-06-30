import projects from '../../data/project.json';
import collaborators from '../../data/collaborator.json';

class Utils {
  static getUserById(id) {
    return collaborators.filter((collaborator) => collaborator.id == id)[0];
  }

  static getTeamMembers(team) {
    return team.map((member) => this.getUserById(member));
  }
}

export default Utils;
