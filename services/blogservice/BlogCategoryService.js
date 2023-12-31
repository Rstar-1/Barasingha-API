const blogcategory = require("../../models/blogs/BlogCategorySchema");

// register blogs
exports.blogcategoryregister = async (req, res) => {
  const { category } = req.body;
  try {
    const adduser = new blogcategory({
      category,
    });

    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// userdata
exports.getcategorydata = async (req, res) => {
  try {
    const userdata = await blogcategory.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
};

// individual data
exports.getcategorysingledata = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await blogcategory.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
};

// update data
exports.updatecategorydata = async (req, res) => {
  try {
    console.log(req.body, "meddd");
    const { id } = req.params;

    const updateduser = await blogcategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// delete  data
exports.deletecategorydata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await blogcategory.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
};
