const basicenquiry = require("../../models/plans/EnquiryBasic");

// BasicEnquiry add
exports.basicregister = async (req, res) => {
  const { name, message } = req.body;
  try {
    const adduser = new basicenquiry({
      name,
      message,
    });

    await adduser.save();
    res.status(201).json(adduser);
    //console.log(adduser, "basicadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// BasicEnquiry all data
exports.getbasicdata = async (req, res) => {
  try {
    let offset = 0;
    const limit = 4;
    if (req.body.offset) {
      offset = req.body.offset;
    }

    const searchobject = {};
    if (req.body.search) {
      Object.assign(searchobject, {
        $or: [
          {
            name: {
              $regex: `${req.body.search.toString().trim()}`,
              $options: "i",
            },
          },
          {
            message: {
              $regex: `${req.body.search.toString().trim()}`,
              $options: "i",
            },
          },
        ],
      });
    }
    const records = await basicenquiry
      .find(searchobject)
      .skip(offset)
      .limit(limit);
    const totalCount = await basicenquiry.countDocuments(searchobject);
    res.status(200).json({
      data: records,
      total: totalCount,
      totalCount: totalCount,
    });
  } catch (error) {
    console.error("Error fetching basic data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// BasicEnquiry single data
exports.getbasicsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await basicenquiry.findById({ _id: id });

    //console.log(userindividual, "basicsingledata");
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
};

// BasicEnquiry update data
exports.updatebasicdata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await basicenquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(req.body, "basicupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// BasicEnquiry delete data
exports.deletebasicdata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await basicenquiry.findByIdAndDelete({ _id: id });

    //console.log(deletuser, "basicdeletedata");
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
};
