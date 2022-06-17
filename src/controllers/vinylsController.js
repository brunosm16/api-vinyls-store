exports.getAllVinyls = (req, res) => {
  const fakeItems = ['mockItem', 'mockItem-2'];
  res.status(200).json({
    status: 'success',
    totalItems: fakeItems.length,
    items: {
      fakeItems,
    },
  });
};

exports.getVinylById = (req, res) => {
  const fakeItems = ['mockItem'];
  res.status(200).json({
    status: 'success',
    item: fakeItems,
  });
};
