import { currentUser } from "@clerk/nextjs"

export default async function Home() {
  const user = await currentUser();
  return (
    <div>
      <h1 className="h1-bold">Next.js 14 hello world!</h1>
      <h1 className="h2-bold">Next.js 14 hello world!</h1>
      <h1 className="h3-bold">Next.js 14 hello world!</h1>
      <div className="pt-4">
        {!user ? <h1>Not Log-in</h1> : <h1>Hello {user.firstName}</h1>}
      </div>
    </div>
  )
}
