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

// Mine pagination all data
exports.minepaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        title: {
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

// Mine Activity pagination all data
exports.activitypaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Activity" };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const activitystore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ activitystore, totalCount });
    } else {
      const activitystore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ activitystore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Activity published pagination all data
exports.activitypluspaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Activity", status: true };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const activitypstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ activitypstore, totalCount });
    } else {
      const activitypstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ activitypstore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Activity unpublished pagination all data
exports.activitynotpaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Activity", status: false };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const activitynstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ activitynstore, totalCount });
    } else {
      const activitynstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ activitynstore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Manage pagination all data
exports.managepaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Manage" };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const managestore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ managestore, totalCount });
    } else {
      const managestore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ managestore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Manage published pagination all data
exports.managepluspaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Manage", status: true };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const managepstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ managepstore, totalCount });
    } else {
      const managepstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ managepstore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Manage unpublished pagination all data
exports.managenotpaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Manage", status: false };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const managenstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ managenstore, totalCount });
    } else {
      const managenstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ managenstore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Stock pagination all data
exports.stockpaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Stock" };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const stockstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ stockstore, totalCount });
    } else {
      const stockstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ stockstore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Stock published pagination all data
exports.stockpluspaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Stock", status: true };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const stockpstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ stockpstore, totalCount });
    } else {
      const stockpstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ stockpstore, totalCount });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mine Stock unpublished pagination all data
exports.stocknotpaginationdata = async (req, res) => {
  try {
    const { offset = 0, search = "", pagination = true } = req.body;
    const searchObject = { category: "Stock", status: false };
    if (search) {
      searchObject.title = {
        $regex: search.toString().trim(),
        $options: "i",
      };
    }
    if (pagination === true) {
      const stocknstore = await mine
        .find(searchObject)
        .skip(parseInt(offset, 10))
        .limit(6);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ stocknstore, totalCount });
    } else {
      const stocknstore = await mine.find(searchObject);
      const totalCount = await mine.countDocuments(searchObject);
      res.json({ stocknstore, totalCount });
    }
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
