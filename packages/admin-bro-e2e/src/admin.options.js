const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroSequelize = require('@admin-bro/sequelize')

AdminBro.registerAdapter(AdminBroMongoose)
AdminBro.registerAdapter(AdminBroSequelize)

const AdminCompany = require('./companies/company.admin')
const AdminEmployee = require('./employees/employee.admin')
const AdminExternalEmployee = require('./external-employees/external-employee.admin')
const AdminTaggable = require('./taggables/taggable.admin')
const AdminProfession = require('./professions/profession.admin')
const AdminTool = require('./tools/tool.admin')
const AdminPage = require('./pages/page.admin')
const AdminNested = require('./nested/nested.admin')

// AdminBro.bundle('./components/sidebar-footer', 'SidebarFooter')
// AdminBro.bundle('./components/no-records', 'NoRecords')

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [
    AdminCompany,
    AdminEmployee,
    AdminProfession,
    AdminExternalEmployee,
    AdminTool,
    AdminTaggable,
    AdminPage,
    AdminNested,
  ],
  version: {
    admin: true,
    app: process.env.npm_package_version,
  },
  branding: currentUser => ({
    companyName: currentUser ? currentUser.email : 'something',
  }),
  pages: {
    aboutUs: {
      handler: async () => { console.log('clicked') },
      component: AdminBro.bundle('./components/example-page'),
      icon: 'Add',
    },
  },
  locale: {
    language: 'en',
    translations: {
      properties: {
        'tags.addNewItem': 'Add new Tag',
        'isBig.true': 'Ja',
        'companySize.b': 'superBig',
      },
    },
  },
}

module.exports = options
