const db = require('../models');
const Users = db.users;

const Contacts = db.contacts;

const Organizations = db.organizations;

const Tasks = db.tasks;

const ContactsData = [
  {
    name: 'Alice Johnson',

    email_address: 'alice.johnson@techinnovators.com',

    phone_number: '555-1234',

    website_link: 'https://alicejohnson.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    address: 'Alfred Wegener',
  },

  {
    name: 'Bob Williams',

    email_address: 'bob.williams@creativesolutions.com',

    phone_number: '555-5678',

    website_link: 'https://bobwilliams.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    address: 'Ernest Rutherford',
  },

  {
    name: 'Charlie Brown',

    email_address: 'charlie.brown@globalenterprises.com',

    phone_number: '555-8765',

    website_link: 'https://charliebrown.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    address: 'Rudolf Virchow',
  },

  {
    name: 'Diana Prince',

    email_address: 'diana.prince@nextgentech.com',

    phone_number: '555-4321',

    website_link: 'https://dianaprince.com',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    address: 'Galileo Galilei',
  },
];

const OrganizationsData = [
  {
    name: 'Tech Innovators',
  },

  {
    name: 'Creative Solutions',
  },

  {
    name: 'Global Enterprises',
  },

  {
    name: 'NextGen Technologies',
  },
];

const TasksData = [
  {
    title: 'James Clerk Maxwell',

    description: 'Gustav Kirchhoff',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Emil Kraepelin',

    description: 'Paul Ehrlich',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Justus Liebig',

    description: 'Emil Kraepelin',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Max Delbruck',

    description: 'Gustav Kirchhoff',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }
}

async function associateContactWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setUser) {
    await Contact0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setUser) {
    await Contact1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setUser) {
    await Contact2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setUser) {
    await Contact3.setUser(relatedUser3);
  }
}

async function associateContactWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setOrganization) {
    await Contact0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setOrganization) {
    await Contact1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setOrganization) {
    await Contact2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setOrganization) {
    await Contact3.setOrganization(relatedOrganization3);
  }
}

async function associateTaskWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setUser) {
    await Task0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setUser) {
    await Task1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setUser) {
    await Task2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setUser) {
    await Task3.setUser(relatedUser3);
  }
}

async function associateTaskWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setOrganization) {
    await Task0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setOrganization) {
    await Task1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setOrganization) {
    await Task2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setOrganization) {
    await Task3.setOrganization(relatedOrganization3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Contacts.bulkCreate(ContactsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Tasks.bulkCreate(TasksData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateContactWithUser(),

      await associateContactWithOrganization(),

      await associateTaskWithUser(),

      await associateTaskWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('organizations', null, {});

    await queryInterface.bulkDelete('tasks', null, {});
  },
};
