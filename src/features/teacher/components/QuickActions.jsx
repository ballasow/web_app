import { Link } from "react-router-dom";
import { PencilIcon, BookOpenIcon } from "@heroicons/react/24/outline";
export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      <Link
        to="/teacher/grades"
        className="bg-green-100 text-green-700 px-4 py-2 rounded-lg flex items-center"
      >
        <PencilIcon className="w-5 h-5 mr-2" />
        Saisir notes
      </Link>
      <Link
        to="/teacher/courses"
        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg flex items-center"
      >
        <BookOpenIcon className="w-5 h-5 mr-2" />
        Voir mes cours
      </Link>
    </div>
  );
}
