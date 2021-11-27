const express = require("express");
const router = express.Router();

const Students = require("../models/students");

router.post("/", async (req, res) => {
  try {
    const newStudent = await Students.create({
      name: req.body.name,
      email: req.body.email,
      enrollmentNumber: req.body.enrollmentNumber,
    });
    res.send({ newStudent });
  } catch (err) {
    res.status(400).send({ Error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const students = await Students.find({});
    res.send(students);
  } catch (err) {
    res.status(400).send({ Error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (student) return res.send(student);
    if (!student) return res.send("No student with id " + req.params.id);
  } catch (err) {
    res.status(400).send({ Error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({
      message: "Students was updated successfully",
      Student: updatedStudent,
    });
  } catch (err) {
    res.status(400).send({ Error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await Students.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
  } catch (err) {
    res.status(400).send({ Error: err });
  }
});

module.exports = router;
