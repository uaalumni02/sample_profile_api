class Db {
  static async addProfile(model, data) {
    try {
      const newProfile = await model({ ...data });
      return newProfile.save();
    } catch (error) {
      throw error;
    }
  }
  static async getAllProfiles(model) {
    try {
      const allProfiles = await model.find({});
      return allProfiles;
    } catch (error) {
      throw error;
    }
  }
  static async getProfileById(model, id) {
    try {
      const profile = await model.findById(id);
      return profile;
    } catch (error) {
      throw error;
    }
  }
  static async editProfile(model, profileId, profileData) {
    try {
      const filter = { _id: profileId };
      const updatedProfile = await model.findOneAndUpdate(filter, profileData, {
        new: true,
      });
      return updatedProfile;
    } catch (error) {
      throw error;
    }
  }
}

export default Db;
