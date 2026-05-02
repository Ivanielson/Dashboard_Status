import { Clipboard, Globe, GlobeOff } from "lucide-react";

const Tbody = () => {
  const data = [
    {
      status: "200",
      name: "Google",
      url: "https://google.com/"
    },
    {
      status: "500",
      name: "Status App Frontend",
      url: "http://localhost:8000/"
    },
    {
      status: "500",
      name: "Status App Backend",
      url: "http://localhost:3000/"
    },
    {
      status: "200",
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/"
    },
    {
      status: "200",
      name: "Lucide Icons",
      url: "https://lucide.dev/"
    },
    {
      status: "200",
      name: "React Js",
      url: "https://react.dev/"
    },
    {
      status: "200",
      name: "Jest",
      url: "https://jestjs.io/pt-BR/"
    },
  ];

  return (
    <tbody className="text-center">
      {data.map((item, index) => (
        <tr key={index} className="hover:bg-gray-100 hover:text-gray-700">
          <td className={`border border-spacing-2 border-gray-300 p-1 w-1/12 ${item.status === "200" ? "text-green-500" : "text-red-500"}`}>
            <span className="flex items-center justify-center mb-1">
              {item.status === "200" ? <Globe /> : <GlobeOff />}
            </span>
            <span className="flex items-center justify-center mb-1">
              {item.status === "200" ? "HEALTHY" : "UNHEALTHY"}
            </span>
          </td>
          <td className="border border-spacing-2 border-gray-300 p-1 w-9/12">
            {item.name}
          </td>
          <td className="border border-spacing-2 border-gray-300 p-1 w-1/12">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center hover:text-green-400">
              <Clipboard />
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default Tbody;
