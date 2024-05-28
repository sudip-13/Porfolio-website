import RotatingIcons from './RotatingIcon';
interface SkillProps {
    id: string;
}


export const Skill: React.FC<SkillProps> = ({ id }) => {
    return (
        <>
            <div id={id}>
                <div className="text-center">
                    <p className="text-4xl sm:text-5xl font-serif font-medium mt-4">Skills</p>
                    <p className="mt-1 font-serif font-medium text-lg sm:text-xl">where creativity meets functionality</p>
                </div>
                <div className="container mx-auto mt-4">
                    <RotatingIcons />
                </div>
            </div>
        </>
    )
}