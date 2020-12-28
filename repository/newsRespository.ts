import * as mongoose from 'mongoose';
import NewSchema from '../model/newsSchema';

export default mongoose.model('news', NewSchema); // Colleciton e o nome
