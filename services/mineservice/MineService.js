const mine = require("../../models/mine/MineSchema");

// Mine add
exports.mineadddata = async (req, res) => {
  const { title, category, reason, payment, realamount } = req.body;
  try {
    const adduser = new mine({
      title,
      category,
      reason,
      payment,
      realamount,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "mineadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Mine all data
exports.minegetdata = async (req, res) => {
  try {
    const userdata = await mine.find();
    res.status(201).json(userdata);

    // console.log(userdata, "minealldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Mine pagination all data
exports.minepaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        sectionname: {
          $regex: `${search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const minestore = await mine.find(searchObject).skip(offset).limit(6);
    const totalCount = await mine.countDocuments(searchObject);
    res.json({ minestore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine single data
exports.minesingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await mine.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "minesingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Mine update data
exports.mineupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await mine.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        category: req.body.category,
        reason: req.body.reason,
        payment: req.body.payment,
        realamount: req.body.realamount,
      },
      {
        new: true,
      }
    );

    //console.log(updateduser, "mineupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Mine status data
exports.minestatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await mine.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "minestatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Mine delete data
exports.minedeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await mine.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "minedeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
