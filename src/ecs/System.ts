import { Entity } from './Entity';

export class System {
  constructor(private entities: Entity[]) {}

  initialize() {
    for (const entity of this.entities) {
    }
  }
}
