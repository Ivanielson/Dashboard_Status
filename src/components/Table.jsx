import Tbody from "./Tbody";

const Table = () => {
  return (
    <table className="table-auto w-10/12 border-separate mt-10 text-gray-400 mx-auto text-lg">
      <thead>
        <tr className="text-xl text-white opacity-75">
          <th className="bg-black border border-spacing-2 border-gray-300 p-2 w-2/12">Status</th>
          <th className="bg-black border border-spacing-2 border-gray-300 p-2 w-8/12">Name</th>
          <th className="bg-black border border-spacing-2 border-gray-300 p-2 w-2/12">URL Copy</th>
        </tr>
      </thead>
      <Tbody />
    </table>
  )
}

export default Table;
