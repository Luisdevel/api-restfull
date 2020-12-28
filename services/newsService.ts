import NewsRepository from '../repository/newsRespository';

class NewsService {

  get() {
    return NewsRepository.find({}); // Retorna todos os registros
  }

  getById(_id) {
    return NewsRepository.findById(_id); // Retorna o id apenas
  }

  create(news) {
    return NewsRepository.create(news);
  }

  update(_id, news) {
    return NewsRepository.findByIdAndUpdate(_id, news);
  }

  delete(_id) {
    return NewsRepository.findByIdAndRemove(_id);
  }

}

export default new NewsService();
