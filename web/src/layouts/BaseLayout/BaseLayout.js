const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="bg-light-gray h-screen w-screen flex items-center justify-center">
        <div className="relative sm:max-w-sm w-full">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default BaseLayout
