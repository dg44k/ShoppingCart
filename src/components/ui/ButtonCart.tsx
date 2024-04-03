import { ReactNode } from 'react'

type IButton = {
	children: ReactNode
	cl: string
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonCart: React.FC<IButton> = ({ children, cl, onClick }: IButton) => {
	return (
		<button className={'btn-action ' + cl} onClick={onClick}>
			{children}
		</button>
	)
}

export default ButtonCart
