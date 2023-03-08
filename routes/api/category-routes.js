const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

 // find all categories, including its associated Products
router.get('/', async (req, res) => {
  try { 
    const categoryData = await Category.findAll({
    include: [{ model: Product }, { model: Tag }, { model: Category }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
 
 // find one category by its `id` value, including its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }, { model: Tag }, { model: Category }],
    });
    if (!categoryData) {
      res
        .status(404)
        .json({ message: "No category has been found with this id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
