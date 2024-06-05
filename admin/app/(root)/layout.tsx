import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "@/lib/firebase";
import { Store } from "@/type-db";


interface SetupLayoutProp {
    children : React.ReactNode;
}

const SetUpLayout = async ({children}: SetupLayoutProp) => {
    const {userId} =auth()

    
    if(!userId){
        redirect("/sign-in")
    }

    const storeSnap = await getDocs(
        query(
            collection(db, "stores"),
            where("userId", "==", userId),
        )
    )

    let store = null as any

    storeSnap.forEach((doc) => {
        store = doc.data() as Store
        return
    })
    console.log(store)


    if(store){
        redirect(`/${store?.id}`)
    }


    return <div>{ children }</div>; 
}
 
export default SetUpLayout;