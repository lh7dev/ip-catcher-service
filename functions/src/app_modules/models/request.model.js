
const requestTrackingModel = (ipdata) => {
    return {
        timestamp: new Date(),
        clientIp: ipdata.clientIp
    }
};

module.exports = {
    requestTrackingModel
};
