const Person = require("../models/person");
const router = require("express").Router();



router.post('/', async (req, res) => {
    try {
      const { name, details } = req.body;
      const person = new Person({ name, details });
      if (typeof name != 'string') {
        return res.status(400).json({ error: 'Name should be a string' });
      }
      if (typeof details != 'string') {
        return res.status(400).json({ error: 'details should be a string' });
      }
      await person.save();
      res.status(201).json(person);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/:user_id', async (req, res) => {
    try {
      const person = await Person.findById(req.params.user_id);
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.status(201).json(person);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.put('/:user_id', async (req, res) => {
    try {
      const { name, details } = req.body;
      const updatedPerson = await Person.findByIdAndUpdate(req.params.user_id, { name, details }, { new: true });
      if (typeof name != 'string') {
        return res.status(400).json({ error: 'Name should be a string' });
      }
      if (typeof details != 'string') {
        return res.status(400).json({ error: 'details should be a string' });
      }
      if (!updatedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.status(201).json(updatedPerson);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.delete('/:user_id', async (req, res) => {
    try {
      const deletedPerson = await Person.findByIdAndRemove(req.params.user_id);
      if (!deletedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
      res.json({ message: 'Person deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;