import { Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 pt-5 bg-gradient-to-b from-black to-transparent w-full flex justify-between items-start">
      <h1 className="font-light text-4xl mb-6">Notes</h1>
      <Link to="/app/note/new-note">
        <div className="flex justify-center items-center gap-2 bg-neutral-900/40 hover:bg-neutral-800 p-[10px] border-2 rounded-full backdrop-blur-sm">
          <Plus size={20} />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;