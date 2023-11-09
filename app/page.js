import CreateTask from "@/components/CreateTask";
import Task from "@/components/Task";

export default function Home() {
  return (
    <div className="p-4 md:bg-white-500 md:p-8 lg:bg-purble-400 lg:p-12 xl:bg-red-400 xl:p-16  ">
      <div>
        <h1 className="flex justify-center text-white font-bold p-2 text-2xl ">iTask</h1>
        <CreateTask/>
        <Task/>
      </div>

      <p className="absolute text-xs text-white">by Jose Morales </p> 
    </div>
  )
}
