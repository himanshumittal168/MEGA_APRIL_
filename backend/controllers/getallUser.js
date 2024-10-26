// WRITE AN API to get all the Users

const User=require("../model/User");

const getAllUsers = async (req, res) => 
{
    try 
    {
      const users = await User.find({});
      res.status(200).json({ message: "User fetcch successfull", users });
    }
    catch (error) 
    {
      console.error("Error fetching users", error);
      res.status(500).json({ message: "Error fetching users" });
    }
};


module.exports=getAllUsers;

