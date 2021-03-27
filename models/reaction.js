'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaction extends Model {

    static associate({User,Post:Post}) {

      this.belongsTo(User,{foreignKey:'username'});
      this.belongsTo(Post,{foreignKey:'post_id'});
      
    }
  };
  Reaction.init({
    reaction_id:{
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      
      allowNull: false,
      type: DataTypes.STRING
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
    },
    post_id: {
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
    modelName: 'Reaction',
  });
  return Reaction;
};