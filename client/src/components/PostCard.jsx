import toast from "react-hot-toast";
import { usePost } from "../context/PostContainer";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const { deletePost } = usePost();
  const navigate = useNavigate();
  const handelDelete = async (id) => {
    toast(
      (t) => (
        <div className="text-white">
          <p>Are you sure?</p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-600 px-3 py-2 text-white rounded-sm mx-2"
              onClick={async () => {
                await deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer "
      onClick={() => navigate(`/posta/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>
          <button
            className="bg-red-600 rounded-sm px-2 py-1 text-sm"
            onClick={() => handelDelete(post._id)}
          >
            DELETE
          </button>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
