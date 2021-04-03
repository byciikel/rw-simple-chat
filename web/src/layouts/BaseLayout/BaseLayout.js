const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-light dark:bg-gray-dark h-screen w-screen flex items-center justify-center">
        <div className="relative sm:max-w-sm md:max-w-md lg:max-w-lg w-full mx-5">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default BaseLayout
