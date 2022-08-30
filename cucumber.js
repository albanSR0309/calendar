const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const calendar_backend = [
  ...common,
  'tests/apps/calendar/backend/features/**/*.feature',
  '--require tests/apps/calendar/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  calendar_backend
};
