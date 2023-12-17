import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
export const config = {
    apiKey: "AIzaSyBLkVLiSplI-K_Yc8Pf4yiBaYhGf4xmkzE",
    authDomain: "hgstore-25933.firebaseapp.com",
    projectId: "hgstore-25933",
    storageBucket: "hgstore-25933.appspot.com",
    messagingSenderId: "585882901477",
    appId: "1:585882901477:web:c43669789e33ff2cdf2d0c"
};

const app = initializeApp(config);
const storage = getStorage();

export async function uploadProductImage(file: any) {
    const now = new Date()
    if (file.name) {
        const uploadRef = (file.name + " date:(" + now.toUTCString() + ")")
        const storageRef = ref(storage, uploadRef);
        try {
            const snapshot = await uploadBytes(storageRef, file)
            const url = new URL("https://firebasestorage.googleapis.com/v0/b/hgstore-25933.appspot.com/o/" + snapshot.ref.fullPath + "?alt=media");
            return url.href
        } catch (error) {
            console.log(error)
            return ""
        }
    }
    return ""
}