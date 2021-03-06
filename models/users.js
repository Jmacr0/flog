module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Users.associate = function(models) {
    Users.hasMany(models.Posts, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
    Users.hasMany(models.Comments, {
      onDelete: "cascade"
    });
    Users.hasMany(models.Likes, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: "cascade"
    });
  
  };
  return Users;
};

// Any other columns needed here?
// post count, comment count, like count etc.?