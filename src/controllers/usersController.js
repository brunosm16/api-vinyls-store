exports.getAllUsers = (req, res) => {
  const fakeUsers = ['fakeUser', 'fakeUser-2'];
  res.status(200).json({
    status: 'success',
    totalItems: fakeUsers.length,
    items: {
      fakeUsers,
    },
  });
};

exports.getUserById = (req, res) => {
  const fakeUser = ['fakeUser'];
  res.status(200).json({
    status: 'success',
    item: fakeUser,
  });
};
