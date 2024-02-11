import express from "express";

import profileController from "../controllers/profile";

const router = express.Router();

router
  .route("/")
  .post(profileController.addProfile)
  .get(profileController.allProfiles);

router.route("/:id").get(profileController.getProfileById);

export default router;
