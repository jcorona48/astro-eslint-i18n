import { type LucideProps, icons } from 'lucide-react';

export type IconsName = keyof typeof icons;

interface IconByNameProps extends Omit<LucideProps, 'ref'> {
    name?: IconsName;
}

const IconByName = ({ name = 'X', size, ...props }: IconByNameProps) => {
    const Icon = icons[name];
    const IconElement = <Icon size={size} {...props} />;

    return IconElement;
};

export default IconByName;
