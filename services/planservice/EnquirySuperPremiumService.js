const superpremiumenquiry = require("../../models/plans/EnquirySuperPremium");

// SuperPremiumEnquiry add
exports.superpremiumregister = async (req, res) => {
  const { name, message } = req.body;
  try {
    const adduser = new superpremiumenquiry({
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

// SuperPremiumEnquiry all data
exports.getsuperpremiumdata = async (req, res) => {
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
    const records = await superpremiumenquiry
      .find(searchobject)
      .skip(offset)
      .limit(limit);
    const totalCount = await superpremiumenquiry.countDocuments(searchobject);
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

// SuperPremiumEnquiry single data
exports.getsuperpremiumsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await superpremiumenquiry.findById({ _id: id });

    //console.log(userindividual, "basicsingledata");
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
};

// SuperPremiumEnquiry update data
exports.updatesuperpremiumdata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await superpremiumenquiry.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    //console.log(updateduser, "basicupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// SuperPremiumEnquiry delete data
exports.deletesuperpremiumdata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await superpremiumenquiry.findByIdAndDelete({ _id: id });

    //console.log(deletuser, "basicdeletedata");
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
};
