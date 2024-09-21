import { auth } from "../_lib/auth";

const page = async () => {
  const session = await auth();
  return <div>Welcome {session?.user?.name} 🤠</div>;
};
export default page;
