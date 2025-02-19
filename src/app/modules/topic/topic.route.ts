import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { TopicControllers } from "./topic.controller";
import { TopicValidations } from "./topic.validation";
import { USER_ROLE } from "../user/user.constant";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/create-topic",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  validateRequest(TopicValidations.createTopicValidationSchema),
  TopicControllers.createTopic,
);

router.get("/:topicId", TopicControllers.getTopic);
router.get("/", TopicControllers.getAllTopics);

router.patch(
  "/update-topic/:topicId",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  validateRequest(TopicValidations.updateTopicValidationSchema),
  TopicControllers.updateTopic,
);

// router.post(
//   "/link-lesson",
//   validateRequest(TopicValidations.linkLessonToTopicValidationSchema),
//   TopicControllers.linkLessonToTopic,
// );

router.delete(
  "/delete-topic/:topicId",
  auth(USER_ROLE.admin, USER_ROLE.superAdmin),
  TopicControllers.deleteTopic,
);

export const TopicRoutes = router;
