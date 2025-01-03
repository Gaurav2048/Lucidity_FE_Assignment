type OwnProps = {
    title: string;
    icon: () => React.ReactElement;
    value: number;
}

const AppCard: React.FC<Partial<OwnProps>> = ({
    title,
    icon,
    value
}) => {
    return <div className="max-w-sm grow mx-auto bg-white shadow-md p-8 rounded-lg p-6 ">
    <div className="flex items-start space-x-2 text-gray-600">
      {icon?.()}
      <div>
        <span className="text-sm">{title!}</span>
      <h1 className="text-3xl font-medium text-gray-800 mt-4">{value!}</h1>
    </div>
    </div>
  </div>
}

export default AppCard;
