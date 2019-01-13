const users = [
  {
    id: 1,
    firstname: "Willy",
    lastname: "Akilimali",
    othrname: "Booba",
    email: "willycirh@gmail.com",
    phoneNumber: "884503457",
    username: "willyAk",
    registered: 12 / 4 / 2013,
    isAdmin: true
  },
  {
    id: 2,
    firstname: "marie",
    lastname: "iragi",
    othername: "louise",
    email: "marcirh@gmail.com",
    phoneNumber: "8845043257",
    username: "marieLoui",
    registered: 2 / 04 / 2016,
    isAdmin: false
  },
  {
    id: 3,
    firstname: "Gloire",
    lastname: "Bahogw",
    othrname: "Bugati",
    email: "gloireBah@gmail.com",
    phoneNumber: "88498057",
    username: "gloireBah",
    registered: 22 / 04 / 2018,
    isAdmin: false
  }
];

exports.updateUsers = (req, res) => {
  const id = parseInt(req.params.id);
  const some = users.find(user => user.id === id);
  if (!some) {
    return res.status(404).json({ error: "sorry user not found." });
  }
  const updateUser = {
    id: id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othername: req.body.othername,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    registered: req.body.registered,
    isAdmin: req.body.isAdmin
  };
  const userId = users.indexOf(some);
  const newData = (users[userId] = updateUser);
  return res.json({ status: 200, data: [newData] });
};
