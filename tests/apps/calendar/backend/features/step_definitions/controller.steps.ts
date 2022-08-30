import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { CalendarBackendApp } from '../../../../../../src/apps/calendar/backend/CalendarBackendApp';
import container from '../../../../../../src/apps/calendar/backend/dependency-injection';
import { EnvironmentArranger } from '../../../../../Contexts/Shared/infrastructure/arranger/EnvironmentArranger';

const token = {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMmM0NWE2Ni0wN2IyLTRlMzgtYTNhMC0xZjcyODJhMDIwMzAiLCJpYXQiOjE2NjExOTk0NDd9.s2M1qYlXI0x-moKfssCevscSrl3tv8vFRov4LtXTp-0'}

let _request: request.Test;
let _response: request.Response;
let application: CalendarBackendApp;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body)).set(token);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepEqual(_response.body, {});
});

Then('the response content should be:', response => {
  assert.deepEqual(_response.body, JSON.parse(response));
});

BeforeAll(async () => {
  const environmentArranger: Promise<EnvironmentArranger> = container.get('Calendar.EnvironmentArranger');
  await (await environmentArranger).arrange();
  application = new CalendarBackendApp();
  await application.start();
});

AfterAll(async () => {
  const environmentArranger: Promise<EnvironmentArranger> = container.get('Calendar.EnvironmentArranger');
  await (await environmentArranger).arrange();
  await (await environmentArranger).close();
  await application.stop();
});
