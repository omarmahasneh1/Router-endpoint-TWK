'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {

    static associate(models) {
      
    }
  };
  Relationship.init({
    status: {
      allowNull:false,
      type:DataTypes.INTEGER
    },
    actionMaker:{
      type: DataTypes.STRING,
      allowNull: false
    },
    actionReceiver:{
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'relationship',
    modelName: 'Relationship',
  });
  return Relationship;
};