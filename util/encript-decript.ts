import CryptoJS from "crypto-js";
const SecretKey: any = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
export function encryptData(datas: string) {
    return CryptoJS.AES.encrypt(datas, SecretKey).toString();


}

export function decryptData(encDatas: string) {
    return CryptoJS.AES.decrypt(encDatas, SecretKey).toString(CryptoJS.enc.Utf8);
}