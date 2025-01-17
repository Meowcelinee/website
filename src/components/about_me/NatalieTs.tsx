import { natalie } from '@/src/data/natalie';

const openBrace = <>&#123;</>;
const closeBrace = <>&#125;</>;

function Interests() {
    return natalie.interests?.map((interest, interestKey) => {
        return (
            <>
                <span className='text-green' key={interestKey}>
                    &apos;{interest}&apos;
                </span>
                ,<br />
            </>
        );
    });
}

// this component is genuinely incomprehensible when formatted
// prettier-ignore
export default function NatalieTs() {
    return (
        <>
            <div>
                {/* const natalie: Nerd = { */}
                <span className='text-mauve'>const</span> natalie<span className='text-teal'>: </span><span className='text-yellow italic'>Nerd</span> = <span className='text-red'>{openBrace}</span>
                <div className='md:pl-8 pl-4'>
                    {/* firstName */}
                    firstName<span className='text-teal'>:</span> <span className='text-green'>&apos;{natalie.firstName}&apos;</span>, <span className='text-overlay0'> // for now</span><br />

                    {/* middleName */}
                    middleName<span className='text-teal'>:</span> <span className='text-green'>&apos;{natalie.middleName}&apos;</span>,<br />

                    {/* lastName */}
                    lastName<span className='text-teal'>:</span> <span className='text-green'>&apos;{natalie.lastName}&apos;</span>,<br />

                    {/* birthday: '2006-01-13', */}
                    birthday<span className='text-teal'>:</span> <span className='text-green'>&apos;{natalie.birthday}&apos;</span>,<br />

                    {/* orientation */}
                    orientation<span className='text-teal'>:</span> <span className='text-peach'>{openBrace}</span><br />
                    <div className='md:pl-8 pl-4'>
                        {/* orientation */}
                        romantic<span className='text-teal'>:</span> <span className='text-green'>&apos;{natalie.orientation.romantic}&apos;</span>,<br />
                        {/* sexuality */}
                        sexuality<span className='text-teal'>:</span> <span className='text-green'>&apos;{natalie.orientation.sexuality}&apos;</span>,<br />
                    </div>
                    <span className='text-peach'>{closeBrace}</span>,<br />

                    {/* pronouns: she/her */}
                    pronouns<span className='text-teal'>:</span> <span className='text-peach'>[</span><br />
                    <div className='md:pl-8 pl-4'>
                        <span className='text-green'>&apos;{natalie.pronouns}&apos;</span>,<br />
                    </div>
                    <span className='text-peach'> ]</span>,<br />

                    {/* a few interests */}
                    interests<span className='text-teal'>:</span> <span className='text-peach'>[</span><br />
                    <div className='md:pl-8 pl-4'>
                        <Interests />
                    </div>
                    <span className='text-peach'> ]</span>, <br />

                    {/* :3 */}
                    colon<span className='text-teal'>:</span>{' '}
                    <span className='text-peach'>{natalie.colon}</span>, <br />
                </div>
                {/* final closing brace */}
                <span className='text-red'>{closeBrace}</span>
            </div>
        </>
    );
}
