import { useState, useEffect } from "react";
import { db } from '../firebase/config';
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
    QuerySnapshot,
    doc
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (cancelled) return;

            setLoading(true);

            const collectionRef = collection(db, docCollection);

            try {
                let q;
                //busca
                // dashboard

                if (search) {
                    q = await query(collection, where('tags', 'array-contains', search), orderBy('createdAt', 'desc'))
                } else {
                    q = await query(collectionRef, orderBy('createdAt', 'desc'));
                }


                onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });

                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        }

        loadData(); // Chamada real aqui
    }, [docCollection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { documents, loading, error };
}