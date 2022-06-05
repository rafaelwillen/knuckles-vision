import { IconBaseProps } from 'react-icons'

export type Props = {
    onClick?: () => void;
    icon?: IconBaseProps;
    text: string;
    isSelected?: boolean;
    textIsVisible?: boolean;
}