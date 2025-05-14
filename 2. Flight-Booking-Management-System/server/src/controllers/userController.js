import User from '../models/User.js';

// // Add User Details function
// export const AddUser = async (req, res) => {
//     const newUser = new User(req.body); //

//     try {
//         const savedUser = await newUser.save();
//         res
//             .status(200)
//             .json({
//                 success: true,
//                 message: 'Successfully Added',
//                 data: savedUser
//             });

//     } catch (error) {
//         res
//             .status(500)
//             .json({
//                 success: false,
//                 message: 'Failed to Add.Try again'
//             });
//     };
// };

// Update User Details function
export const UpdateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully Updated Details',
                data: updatedUser,
            });

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to Update.Try again'
            });
    }
};

// Delete User Details function
export const DeleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully Deleted Details',
            });

    } catch (error) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to Delete.Try again'
            });
    }
};

// Get Single User Details function
export const GetSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const getSingleUser = await User.findById(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'Successfully get single user details',
                data: getSingleUser
            });

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: 'not found any user details'
            });
    }
};

// Get All User Details function
export const GetAllUser = async (req, res) => {

    try {

        const getAllUser = await User.find({});

        res
            .status(200)
            .json({
                success: true,
                count: getAllUser.length,
                message: 'Successfully get all user details',
                data: getAllUser
            });

    } catch (error) {
        res
            .status(404)
            .json({
                success: false,
                message: 'no user data available'
            });
    }
};