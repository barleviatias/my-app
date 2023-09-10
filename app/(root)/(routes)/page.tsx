import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return ( 
        <div>
            pageee protected
            <UserButton afterSignOutUrl="/"/>
        </div>
     );
}
 
export default RootPage;