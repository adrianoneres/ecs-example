import { v4 as uuidv4 } from 'uuid';

import { ClassType } from '../utils/ClassType';
import { Component } from './Component';

export class Entity {
  id: string;
  components: Map<ClassType<Component>, Component['value']>;

  constructor() {
    this.id = uuidv4();
    this.components = new Map();
  }

  getComponent<T extends Component>(key: ClassType<Component>): T['value'] {
    return this.components.get(key);
  }

  addComponent<T extends Component>(
    key: ClassType<T>,
    value: T['value'],
  ): Entity {
    this.components.set(key, value);

    return this;
  }

  removeComponent<T extends Component>(key: ClassType<T>): Entity {
    this.components.delete(key);

    return this;
  }
}
