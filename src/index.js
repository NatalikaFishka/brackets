module.exports = function check(str, bracketsConfig) {
    let newStr = str[0];
    str = str.substr(1);

    while (str.length > 0) {

        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str[0] === bracketsConfig[i][1] && newStr[newStr.length - 1] === bracketsConfig[i][0]) {
                str = str.substr(1);
                newStr = newStr.substr(0, (newStr.length - 1));
            } else if (str[0] === bracketsConfig[i][0]) {
                newStr += str[0];
                str = str.substr(1);
            } else if (str[0] === bracketsConfig[i][1] && newStr[newStr.length - 1] !== bracketsConfig[i][0]) {
                return false;
            }

        }


    }

    return !newStr.length;;
}
