import { UserButton } from "@clerk/nextjs";

export default function ProductePage () {
    return (
        <div>
            <h1 className="h1-bold">This is protected page</h1>
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}