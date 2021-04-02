import { Form, TextField, FieldError, Submit } from '@redwoodjs/forms'

const HomePage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div className="flex flex-wrap justify-between">
          <TextField
            name="email"
            className="w-3/4 h-14 py-2 px-5 border-none bg-light-gray text-light rounded-br-50 shadow-neumorp focus:outline-none"
            placeholder="Email"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^\.]+\..+/,
              },
            }}
          />
          <Submit className="flex align-middle p-3 bg-light-gray text-light rounded-full shadow-neumorp focus:outline-none" >
            <ion-icon className="text-blue-400" size="large" name="chevron-forward-circle"></ion-icon>
          </Submit>
        </div>
        {/* <FieldError name="email" className="error-message" /> */}
      </Form>
    </>
  )
}

export default HomePage
