class AppError extends Error {
    constructor(message, status) {
        super(message); // Pass the message to the parent Error constructor
        this.status = status;
    }
}

export default AppError;