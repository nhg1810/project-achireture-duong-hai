const curdHelper = require('../helpers/crud');

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

}
module.exports = new ProjectManagerService();