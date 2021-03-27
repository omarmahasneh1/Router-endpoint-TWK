'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate({User ,Comment , Reaction }) {
      
      this.belongsTo(User,{foreignKey:'username'});

      
      this.hasMany(Comment,{foreignKey:'post_id'});
      this.hasMany(Reaction,{foreignKey:'post_id'});

    }
  };
  Post.init({
    post_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName:'post',
    modelName: 'Post',
  });
  return Post;
};