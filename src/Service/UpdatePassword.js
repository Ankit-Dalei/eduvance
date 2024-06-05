const updatePassword = async (email, newPassword) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
};

export default updatePassword;