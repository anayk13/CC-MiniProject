import seedData from './seedData.js';

console.log('Starting to seed data...');
seedData()
  .then(() => {
    console.log('Data seeding completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error seeding data:', error);
    process.exit(1);
  }); 