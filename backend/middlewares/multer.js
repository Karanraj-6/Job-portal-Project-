import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });
router.post("/register", upload.single("file"), register);
