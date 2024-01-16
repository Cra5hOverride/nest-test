import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/User (POST)', () => {
    return request(app.getHttpServer())
      .post('/user').send(
        {
          "firstName": "Timber",
          "lastName": "Saw",
        }
      )
      .expect(200)
  });
  it('/User (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect([
        {
          id: 1,
          firstName: 'Chadwick',
          lastName: 'Boseman',
          isActive: true,
          isDelete: false
        },
        {
          id: 2,
          firstName: 'Timber',
          lastName: 'Saw',
          isActive: true,
          isDelete: false
        },
    ]);
  });
  it('/User/ID (GET:ID)', () => {
    return request(app.getHttpServer())
      .get('/user/1')
      .expect(200)
      .expect(
        {
          id: 1,
          firstName: 'Chadwick',
          lastName: 'Boseman',
          isActive: true,
          isDelete: false
        },
       );
  });
});
