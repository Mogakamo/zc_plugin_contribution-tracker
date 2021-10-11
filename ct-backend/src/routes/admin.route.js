const adminRouter = require("express").Router();
import AdminController from "../controllers/admin.controller"
import { userAuth } from "../middlewares/auth.middleware"
import { userOrg } from "../middlewares/check_org.middleware"


// retrieve voters
adminRouter.get("/voters", userOrg, AdminController.getVoters);

//get single voter
adminRouter.get('/voters/:voter_id', userOrg, AdminController.getVoter)

// add voter
adminRouter.post("/voters", userOrg, AdminController.addVoter);

//update voter
adminRouter.patch("/voters", userOrg, AdminController.updateVoter);

//remove voter
adminRouter.delete("/voters", userOrg, AdminController.removeVoter);


//get single voter
// adminRouter.get('/voter', userOrg, AdminController.getVoter)

// Export module
export default adminRouter
