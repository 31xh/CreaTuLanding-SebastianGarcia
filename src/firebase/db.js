import {
    getFirestore,
    collection,
    getDocs,
    query, 
    where,
    doc, 
    getDoc,
    addDoc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "item"));
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });

    return products
}


export const getItemsByCategory = async (category) => {
    const q = query(collection(db, "item"), where("itemCategory", "==", category));
    const products = []
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
    });
    
    return products
}

export const getItemById = async (id) => {
    const docRef = doc(db, "item", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    } else {
        console.log("No such document!");
    }
}

export const addItems = async (order) => {
    const docRef = await addDoc(collection(db, "order"), order);
    return docRef.id;
}