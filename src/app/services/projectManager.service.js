const curdHelper = require('../helpers/crud');
const googleDriverHelper = require('../helpers/google');
const process = require('process');
const e = require('express');
const ProjectModel = require('../model/ProjectModel');
const CateProject = require('../model/CateProject');
const AccountModel = require('../model/AccountModel');
const jwt = require('jsonwebtoken');
const CompanyModel = require('../model/CompanyModel');

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
            }
        } catch (error) {
            console.log(error)
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
            console.log(error)
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
                query: request.query,
                populate: [{ path: 'cateProject', strictPopulate: false }],
            })
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }
    }
    // service update cateproject
    async updateCateProject(request, response, next) {
        try {
            let data = await curdHelper.update({
                model: 'cateProject',
                id: request.body._id,
                obj: request.body.obj
            });
            return data;
        } catch (error) {
            return 'error';
        }
    }
    //service get one cateproject
    async getOneCateProject(idCateProject) {
        try {
            let data = await curdHelper.getSingle({
                model: 'cateProject',
                id: idCateProject,
            });
            return data;
        } catch (error) {
            return 'error';
        }
    }

    //service get one project
    async getOneProject(idProject) {
        try {
            let data = await curdHelper.getSingle({
                model: 'project',
                id: idProject,
                populate: [{ path: 'cateProject', strictPopulate: false }],
            });
            return data;
        } catch (error) {
            return 'error';
        }
    }

    //service updatte project
    async updateProject(request, response, next) {
        try {
            let data = await curdHelper.update({
                model: 'project',
                id: request.body._id,
                obj: request.body.obj
            });
            return data;
        } catch (error) {
            return 'error';
        }
    }
    // live search project
    async liveSearchProject(request, response, next) {
        console.log(request.body.vlSearch)
        let rs = await ProjectModel.find({ nameProject: { $regex: new RegExp('^' + request.body.vlSearch + '.*', 'i') } }).populate([{ path: 'cateProject', strictPopulate: false }]).exec();
        rs = rs.slice(0, 10);
        return rs;
    }
    // live search cate project
    async liveSearchCateProject(request, response, next) {
        console.log(request.body.vlSearch)
        let rs = await CateProject.find({ nameProject: { $regex: new RegExp('^' + request.body.vlSearch + '.*', 'i') } }).exec();
        rs = rs.slice(0, 10);
        return rs;
    }
    // check valid cate in project
    async checkProjectInCate(request, response, next) {
        let rs = await ProjectModel.find({ cateProject: request.body.idCate }).exec();
        return rs;
    }
    //check login
    async checkLogin(request, response, next) {
        if (request.body.userName == 'admin' && request.body.passWord == 'pw2722023') {
            let informationAdmin = {
                _id: 'jfjosjnciop@#djso321',
                name: 'Tên giám đốc',
                date: 'ngày sinh',
                phone: 'ádasd',
                avate: ''
            }
            //mk is secret key
            let token = jwt.sign({ _id: informationAdmin._id }, 'mk')
            return {
                message: 'succes',
                token: token
            };
        }

        let rs = await AccountModel.find({
            userName: request.body.userName,
            passWord: request.body.passWord,
        },
        ).populate([{ path: 'role', strictPopulate: false }]).exec();
        return rs;
    }
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
    //create new information of homepage
    // async createINFHomePage(request, response, next) {
    //     try {
    //         let obj = {
    //             nameCompany: "ádd",
    //             addressCompany: "ádd",
    //             emailCompany: "ádd",
    //             phoneCompany: "ádd",
    //             description: "ádd",
    //             logoCompany: "ádd",
    //             imageReview: "ádd"
    //         }
    //         if (request) {
    //             let data = await curdHelper.create({
    //                 model: 'company',
    //                 obj: obj
    //             });
    //             return data;
    //         } else {
    //             return 'error'
    //         }
    //     } catch (error) {
    //         return 'error'
    //     }
    // }

    //update inf home page
    async updateInfHomePage(request, response, next) {
        try {
            let data = await curdHelper.update({
                model: 'userPage',
                id: request.body._id,
                obj: request.body.obj
            });
            return data;
        } catch (error) {
            return 'error';
        }
    }

    async upLoadFileDrive(namePhoto) {
        try {
            let data = await googleDriverHelper.uploadFileDrive(ID_FOLDER_DESIGN, namePhoto);
            return { 'data': data, 'namePhoto': namePhoto };
        } catch (error) {
            return 'error';
        }

    }
    async upLoadLogo(namePhoto, idFolder) {
        try {
            let data = await googleDriverHelper.uploadFileDrive(idFolder, namePhoto);
            return { 'data': data, 'namePhoto': namePhoto };
        } catch (error) {
            return 'error';
        }

    }
    async getInfCompany(idCompany) {
        try {
            let rs = await CompanyModel.find({ _id: idCompany });
            rs = rs.slice(0, 10);
            return rs;
        } catch (error) {
            return 'error';
        }

    }
    async updateCompany(request, response, next) {
        console.log(request.body)
        try {
            let data = await curdHelper.update({
                model: 'company',
                id: request.body._id,
                obj: request.body.obj
            });
            return data;
        } catch (error) {
            return 'error';
        }
    }
    //add a cate personnal
    async addCatePersonal(request, response, next) {
        try {
            if (request) {
                let data = await curdHelper.create({
                    model: 'role',
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
    async getAllRolePersonal(request, response, next) {
        try {
            let data = await curdHelper.getAll({
                model: 'role',
                query: request.query,
            })
            data = data.map(data => data.toObject());
            return data;
        } catch (error) {
            return 'error';
        }
    }
    async getAllPersonalInf(request, response, next) {
        //chưa làms
    }
}
module.exports = new ProjectManagerService();