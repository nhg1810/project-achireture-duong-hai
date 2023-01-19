// Constants
const { response } = require('express');
const { drive } = require('googleapis/build/src/apis/drive');
const logger = require('../constants/loggerConstant');

// Helpers
const googleDriverHelper = require('../helpers/google');

class GoogleDvController {
    async getAllFileInFolder(request, response, next) {
        const errors = [];
        try {
            if (request.params.fdid) {
                let data = await googleDriverHelper.listFiles(request.params.fdid);
                return logger.status200(response, '202', 'success', data);
            } else {
                return logger.status404(response, 'failed', 'I folder is null');
            }
        } catch (error) {
            errors.push(error.message);
            return logger.status500(response, error, errors);
        }
    }
}
module.exports = new GoogleDvController();
