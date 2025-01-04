import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type OwnProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactElement;
    onSubmit?: () => void;
}

const AppModal: React.FC<OwnProps> = ({
    open, onClose, children, onSubmit
}) => {

  return (
      <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-gray-300 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                Edit Product
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                {children}
              </p>
              <div className="flex mt-4 gap-2 justify-end">
                <Button
                  className="inline-flex items-center gap-2 rounded-md py-1 px-2 text-sm/6 font-semibold text-gray-700 shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={onClose}
                >
                  Close
                </Button>
                {onSubmit ?  <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1 px-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={onSubmit}
                >
                  Update
                </Button> : null}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}


export default AppModal;
