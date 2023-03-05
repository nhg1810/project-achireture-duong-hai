const curdHelper = require('../helpers/crud');
const ProjectModel = require('../model/ProjectModel');
class UserManager {
    //get all information of home page
    async getAllInformationUserPage(request, response, next) {
        try {
            let data = await curdHelper.getAll({
                model: 'userPage',
                query: request.query,
            })
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }

    }
    async findProjectByIdImage(request, response, next) {
        try {
            let rs = await ProjectModel.find({
                "imageProject.urlImage": "https://drive.google.com/uc?id="+request.body.idImage+"",
                'imageProject.idImage': request.body.idImage
            }).populate([{ path: 'cateProject', strictPopulate: false }])
            rs = rs.slice(0, 10);
            return rs;
        } catch (error) {
            return 'error';
        }

    }
}
module.exports = new UserManager();