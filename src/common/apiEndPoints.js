
const Host = {
  ROOT: "http://localhost:3000",
  BACKEND: "http://143.198.185.136",
  PREFIX: "/v1/api", 
};

const ApiEndpoints = {

  UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    create: `/create`,  
    me: `/me`,  
    edit: `/edit`,
    image: `/image/:id`,
    suspension: `/suspension/:id`,
    forgotPassword: `/forgot-password`,
    count: `/count`,

  },

  FileEndpoints: {
    route: `${Host.PREFIX}/file`,
    getSingleImageView: `/get-single-image/:id/view`,
    getSingleImageDownload: `/get-single-image/:id/download`,
    createSingleImage: `/create-single-image`,
  },
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create`,
    delete: `/delete`,
    count: `/count`,
    view: `/view`,
  },
 
};
 
export {ApiEndpoints , Host}