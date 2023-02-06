// Model
const mongoose = require('mongoose');
const models = ['course', 'cateProject', 'project'];

class CurdHelper {

     async getAll({ model = '', query = {} }) {
          try {
               if (!model) { return null }
               return await setupModel(model).find(query);
          } catch (error) {
               console.log(error);
          }
     }

     async getSingle({ model = '', id = '' }) {
          try {
               if (!model || !id) { return null }
               return await setupModel(model).findById(id);
          } catch (error) {
               console.log(error);
          }
     }

     async create({ model = '', obj = '' }) {
          try {
               if (!model || !obj) { return null }

               obj._id = new mongoose.Types.ObjectId();
               const objCreate = new setupModel(model)(obj);
               await objCreate.save();

               return 'success';
          } catch (error) {
               console.log(error);
          }
     }

     async update({ model = '', id = '', obj = '' }) {
          try {
               if (!model || !id || !obj) { return null }

               const objUpdate = await setupModel(model).findById(id);
               await objUpdate.updateOne(obj);

               return 'success';
          } catch (error) {
               console.log(error);
          }
     }

}

function setupModel(model) {
     if (models.includes(model)) {
          switch (model) {
               case 'course':
                    return require('../model/EntityModel');
               case 'cateProject':
                    return require('../model/CateProject');
               case 'project':
                    return require('../model/ProjectModel');
               default:
                    return null;
          }
     }
}

module.exports = new CurdHelper();