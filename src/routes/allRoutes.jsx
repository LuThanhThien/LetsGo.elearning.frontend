import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";
import courseRoutes from "./courseRoutes";
import infoRoutes from "./infoRoutes";

var allRoutes = [
   ...adminRoutes,
   ...userRoutes,
   ...courseRoutes,
   ...infoRoutes,
]

export default allRoutes;