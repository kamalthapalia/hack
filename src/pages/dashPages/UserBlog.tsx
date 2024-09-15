import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/AuthHook.ts";
import BlogCardGroup from "../../components/subComponent/UserBlog/BlogCardGroup.tsx";
import { serverApi } from "../../utils/axios.ts";
import { BlogType } from "../../definations/apiTypes.ts";

const UserBlog = () => {
  const { user } = useAuth();
  const [userBlogs, setUserBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      const res = await serverApi.get(`/blog/user`);
      setUserBlogs(res.data.data as BlogType[])
    }
    fetchUserBlogs()
  }, [])



  return (
    <BlogCardGroup isOnHome={false} blogsArray={userBlogs} title={`${user.username}'s blogs`} />
  )
}

export default UserBlog
