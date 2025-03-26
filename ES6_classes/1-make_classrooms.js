import ClassRoom from './0-classroom.js';

/**
 * Fonction qui initialise un tableau avec trois instances de ClassRoom
 * @returns {Array} Tableau contenant trois instances de ClassRoom
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
