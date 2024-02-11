import Db from "../db/db";
import Profile from "../models/profile";

import validator from "../validator/profile";
import * as Response from "../helpers/response/response";

class ProfileData {
  static async addProfile(req, res) {
    const ProfileData = { ...req.body };
    try {
      const result = await validator.validateAsync(ProfileData);
      if (!result.error) {
        const ProfileInfo = await Db.addProfile(Profile, ProfileData);
        return Response.responseOkCreated(res, ProfileInfo);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async allProfiles(req, res) {
    try {
      const allProfiles = await Db.getAllProfiles(Profile);
      return Response.responseOk(res, allProfiles);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async getProfileById(req, res) {
    const { id } = req.params;
    try {
      const profileById = await Db.getProfileById(Profile, id);
      return Response.responseOk(res, profileById);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async editProfile(req, res) {
    const profileId = req.params.id;
    const profileData = { ...req.body };
    const { name, bio } = req.body;
    const updateProfile = { name, bio };
    try {
      const result = await validator.validateAsync(updateProfile);
      if (!result.error) {
        const profileToUpdate = await Db.editProfile(
          Profile,
          profileId,
          profileData
        );
        return Response.responseOk(res, profileToUpdate);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
}

export default ProfileData;