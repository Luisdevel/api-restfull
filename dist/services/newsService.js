"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsRespository_1 = require("../repository/newsRespository");
class NewsService {
    get() {
        return newsRespository_1.default.find({}); // Retorna todos os registros
    }
    getById(_id) {
        return newsRespository_1.default.findById(_id); // Retorna o id apenas
    }
    create(news) {
        return newsRespository_1.default.create();
    }
    update(_id, news) {
        return newsRespository_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return newsRespository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewsService();
