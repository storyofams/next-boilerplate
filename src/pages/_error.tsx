import {Flex, Text} from '@components'

const getError = ({res, err}) => {
  let statusCode = 404

  if (res) statusCode = res.statusCode || err.statusCode

  return {statusCode}
}

const getContent = ({statusCode}) => {
  let content = "Even we don't know what happened 🤯"

  if (statusCode === 404) content = 'We could not find the page you were looking for 🤷‍♂️' // not found

  if (statusCode === 500) content = 'Our server had some trouble processing that request 🤷‍♂️' // internal

  if (statusCode === 401) content = "It looks like you're not supposed to be here 👀" // unAuthorized

  return content
}

const Error = ({statusCode}) => {
  return (
    <Flex
      flex={1}
      height="100vh"
      backgroundColor="#000"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white">{getContent({statusCode})}</Text>
    </Flex>
  )
}

Error.getInitialProps = ({res, err}) => getError({res, err})

export default Error
