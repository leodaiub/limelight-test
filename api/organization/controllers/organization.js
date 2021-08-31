"use strict";
const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async findFirst(ctx) {
    const entity = await strapi.models.organization
      .findOne()
      .sort({ createdAt: -1 })
      .limit(1)
      .populate("users", "username")
      .populate("organization_roles", "name")
      .populate("jobs", "title description");
    return sanitizeEntity(entity, { model: strapi.models.organization });
  },
};
