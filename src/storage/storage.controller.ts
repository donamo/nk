import { Controller, Get, Header, Inject, Param, Post } from '@nestjs/common';
import { Client, ClientKafka, EventPattern } from '@nestjs/microservices';
import { microserviceConfig } from 'src/microserviceConfig';

@Controller('storage')
export class StorageController {
  constructor(@Inject('HERO_SERVICE') private client: ClientKafka) {}
  //@Client(microserviceConfig)
  //client: ClientKafka;

  @Get()
  async getHello(): Promise<{ storage: { [key: string]: number } }> {
    const array = [];
    {
      const items = [
        { id: Math.random(), name: 'Mythical Sword' },
        { id: Math.random(), name: 'Key to Dungeon' },
      ];
      console.log('now send');
      console.log(items);

      this.client.emit('hero.kill.dragon', items);
      array.push(items);
    }
    {
      const items = [
        { id: Math.random(), name: 'Mythical Sword' },
        { id: Math.random(), name: 'Key to Dungeon' },
      ];
      console.log('now send');
      console.log(items);

      this.client.emit('hero.kill.dragon', items);
      array.push(items);
    }
    {
      const items = [
        { id: Math.random(), name: 'Mythical Sword' },
        { id: Math.random(), name: 'Key to Dungeon' },
      ];
      console.log('now send');
      console.log(items);

      this.client.emit('hero.kill.dragon', items);
      array.push(items);
    }
    {
      const items = [
        { id: Math.random(), name: 'Mythical Sword' },
        { id: Math.random(), name: 'Key to Dungeon' },
      ];
      console.log('now send');
      console.log(items);

      this.client.emit('hero.kill.dragon', items);
      array.push(items);
    }
    {
      const items = [
        { id: Math.random(), name: 'Mythical Sword' },
        { id: Math.random(), name: 'Key to Dungeon' },
      ];
      console.log('now send');
      console.log(items);

      this.client.emit('hero.kill.dragon', items);
      array.push(items);
    }
    return { storage: { salt: 1 } };
  }

  @EventPattern('hero.kill.dragon')
  async killDragon(data: Record<string, unknown>) {
    console.log('Message recived:', data);
  }

  // async onModuleInit() {
  //   //    this.client.subscribeToResponseOf('hero.kill.dragon');
  //   await this.client.connect();
  // }

  // async onModuleDestroy() {
  //   await this.client.close();
  // }
}
