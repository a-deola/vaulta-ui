type HeadingProps ={
    headline: string,
    text: string
}

const FormHeading = ({headline, text}: HeadingProps) => {
  return (
    <>
    <h3>{headline}</h3>
        <p className="text-xs">{text}</p>
    </>
  )
}

export default FormHeading