import { Entity } from './ecs/Entity';
import { Health } from './ecs/components/Health';
import { Position } from './ecs/components/Position';

const entities = [];

const entity = new Entity()
  .addComponent(Health, 10)
  .addComponent(Position, { x: 0, y: 10 });

entities.push(entity);
