import { FaInfoCircle } from 'react-icons/fa'; 

type OwnProps = {
    title: string;
    icon: () => React.ReactElement;
    value: string;
}

const AppCard: React.FC<Partial<OwnProps>> = () => {
    return <div className="max-w-sm mx-auto bg-white shadow-md p-8 rounded-lg p-6">
    <div className="flex items-start space-x-2 text-gray-600">
      <FaInfoCircle className="text-xl text-primary mt-1" />
      <div>
        <span className="text-sm">Information</span>
      <h1 className="text-3xl font-medium text-gray-800 mt-4">Big Text Here</h1>
    </div>
    </div>
  </div>
}

export default AppCard;
