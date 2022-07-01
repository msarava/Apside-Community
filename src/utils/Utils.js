import projects from '../../data/project.json';
import collaborators from '../../data/collaborator.json';
import clients from '../../data/client.json';

class Utils {
  static getUserById(id) {
    return collaborators.filter((collaborator) => collaborator.id == id)[0];
  }

  static getTeamMembers(team) {
    return team.map((member) => this.getUserById(member));
  }

  static getClientById(id) {
    const client = clients.filter((client) => client.id == id)[0];
    return client;
  }
}

export default Utils;
