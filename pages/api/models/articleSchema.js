
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema(
            {
                title :String,
                imageurl :String,
                details :String
            }

);
// Vérifier si le modèle Post existe déjà dans Mongoose
const existingModel = mongoose.models.Article;

// Créer le modèle Post si nécessaire
const Article = existingModel || mongoose.model('Article', articleSchema );

// Exporter le modèle Post
export default Article;