const os = require('os');

function getIpAddress(): Array<string> {
    let interfaces = os.networkInterfaces();
    let addresses = []
    for (let key in interfaces) {
        let ifaces = interfaces[key]
        for (let i = 0; i < ifaces.length; i++) {
            if (ifaces[i].family == 'IPv4' && !ifaces[i].internal) {
                addresses.push(ifaces[i].address)
            }
        }
    }
    return addresses
}

export default getIpAddress;