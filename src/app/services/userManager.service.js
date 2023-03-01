const curdHelper = require('../helpers/crud');
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
}
module.exports = new UserManager();