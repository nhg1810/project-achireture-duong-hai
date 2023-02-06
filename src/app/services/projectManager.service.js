const curdHelper = require('../helpers/crud');
const googleDriverHelper = require('../helpers/google');
const process = require('process');

const ID_FOLDER_DESIGN = process.env.ID_FOLDER_DESIGN;

class ProjectManagerService {
    async test(request, response, next) {
        const errors = [];
        try {
            let data = await curdHelper.getAll({
                model: 'course',
                query: request.query
            });
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }
    }
    //services get all design from ggdrive
    async getAllFileInFolder(request, response, next) {
        try {
            if (request) {
                let data = await googleDriverHelper.listFiles(ID_FOLDER_DESIGN);
                return data;
            } else {
                return 'error'
            }
        } catch (error) {
            return 'error'
        }
    }
    //service add 1 catrgory product vào db
    async addCateject(request, response, next) {
        try {
            if (request) {
                let data = await curdHelper.create({
                    model: 'cateProject',
                    obj: request.body
                });
                return data;
            } else {
                return 'error'
            }
        } catch (error) {
            return 'error'
        }
    }
    //service show all category prodJECT
    async allCateProject(request, response, next) {
        try {
            let data = await curdHelper.getAll({
                model: 'cateProject',
                query: request.query
            });
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }
    }
    // service add 1 project
    async addProject(request, response, next) {
        try {
            if (request) {
                let data = await curdHelper.create({
                    model: 'project',
                    obj: request.body
                });
                return data;
            } else {
                return 'error'
            }
        } catch (error) {
            return 'error'
        }
    }
    // service get all project
    async getAllProject(request, response, next) {
        try {
            let data = await curdHelper.getAll({
                model: 'project',
                query: request.query
            });
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }
    }
}
module.exports = new ProjectManagerService();