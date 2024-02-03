const Infection = require('../models/infectionSchema');

const infectionController = {
  addInfection: async (req, res) => {
    try {
      const newInfection = req.body;
      
      // Save the Infection to the database
      let infection = await Infection.create(newInfection);
     
      res.status(201).json({ message: 'Infection added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error adding Infection' });
    }
  },

  getInfections: async (req, res) => {
    try {
      console.log("sdgfsdf");

      console.log(req.query.infectionSite);

      // Check if the driver already exists
      const infection = await Infection.findOne({ infectionSite: "knee" });

      if (!infection) {
        return res.status(200).json({ message: 'infection does not exist' });
      }

      console.log(infection.infectionSite);
      res.status(201).json({ message: 'Got infection detials successfully!', infection });
    } catch (error) {
      res.status(500).json({ message: 'Error Getting Driver Details. Logout and Sign in again.', error });
    }
  },
};

module.exports = infectionController;