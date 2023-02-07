const isSuperAdmin = (req, res, next) => {
    try {
        if (req.user_role !== "super_admin"){
            return res.status(401).json({
                succes: false,
                message: "Don't have user permission",
            });
        }

        next();
    } catch (error){
        return res.status(500).json({
            success: false,
            message: "Don't have user permission",
        });
    }
};

export default isSuperAdmin;