const curdHelper = require('../helpers/crud');
const CompanyModel = require('../model/CompanyModel');
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
                "imageProject.urlImage": "https://drive.google.com/uc?id=" + request.body.idImage + "",
                'imageProject.idImage': request.body.idImage
            }).populate([{ path: 'cateProject', strictPopulate: false }])
            rs = rs.slice(0, 10);
            return rs;
        } catch (error) {
            return 'error';
        }

    }
    async detailProjectById(idProject) {
        try {
            let rs = await ProjectModel.find({
                _id: idProject,
                status: "live"
            }).populate([{ path: 'cateProject', strictPopulate: false }])
            rs = rs.slice(0, 10);
            // console.log(rs)
            return rs;
        } catch (error) {
            return 'error';
        }

        // try {
        //     let data = await curdHelper.getSingle({
        //         model: 'project',
        //         id: idProject,
        //         populate: [{ path: 'cateProject', strictPopulate: false }],
        //     });
        //     return data;
        // } catch (error) {
        //     console.log(error)
        //     return 'error';
        // }
    }
    async getInfCompany(idCompany) {

        try {
            let rs = await CompanyModel.find({ _id: idCompany });
            rs = rs.slice(0, 10);
            return rs;
        } catch (error) {
            console.log(error)
            return 'error';
        }

    }
    async getRelativeProject(idCate) {
        try {
            let rs = await ProjectModel.find({

                status: "live",
                "cateProject._id": idCate

            }).populate([{ path: 'cateProject', strictPopulate: false }])
            rs = rs.slice(0, 10);
            // console.log(rs)
            return rs;
        } catch (error) {
            return 'error';
        }
    }
    async getAllCateProject(request, response, next) {
        try {
            let data = await curdHelper.getAll({
                model: 'cateProject',
                query: request.query,
            })
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }

    }
    async getAllPersonal(request, response, next) {
        try {
            let data = await curdHelper.getAll({
                model: 'account',
                query: request.query,
                populate: [{ path: 'role', strictPopulate: false }],
            })
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return error;
        }
    }

}
module.exports = new UserManager();