import { type ReactNode } from "react"

type ContainerProps ={
    children: ReactNode,
    image: string,
    alt:string
}

export default function FormContainer({children, image, alt}: ContainerProps) {
  return (
    <div className="flex justify-between w-full mt-2">
      {children}
      <div className="hidden md:flex w-2/5">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}
