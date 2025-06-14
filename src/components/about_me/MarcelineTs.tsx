import marceline from '@/src/lib/marceline';

const openBrace = <>&#123;</>;
const closeBrace = <>&#125;</>;

function Interests() {
    return marceline.interests?.map((interest, interestKey) => {
        return (
            <div key={interestKey}>
                <span className='text-green' key={interestKey}>
                    &apos;{interest}&apos;
                </span>
                ,<br />
            </div>
        );
    });
}

// prettier-ignore
function Birthday() {
    return (
        <div>
            year<span className='text-teal'>:</span> <span className='text-peach'>{marceline.birthday.year}</span>, <span className='text-overlay0'></span><br />
            month<span className='text-teal'>:</span> <span className='text-peach'>{marceline.birthday.month}</span>, <span className='text-overlay0'></span><br />
            day<span className='text-teal'>:</span> <span className='text-peach'>{marceline.birthday.day}</span>, <span className='text-overlay0'></span><br />
        </div>
    );
}

// this component is genuinely incomprehensible when formatted
// prettier-ignore
export default function MarcelineTs() {
    return (
            <div>
                {/* const marceline: Nerd = { */}
                <span className='text-mauve'>const</span> marceline<span className='text-teal'>: </span><span className='text-yellow italic'>Nerd</span> = <span className='text-red'>{openBrace}</span>
                <div className='md:pl-8 pl-4'>
                    {/* firstName */}
                    firstName<span className='text-teal'>:</span> <span className='text-green'>&apos;{marceline.firstName}&apos;</span>,<br />

                    {/* middleName */}
                    middleName<span className='text-teal'>:</span> <span className='text-green'>&apos;{marceline.middleName}&apos;</span>,<br />

                    {/* lastName */}
                    lastName<span className='text-teal'>:</span> <span className='text-green'>&apos;{marceline.lastName}&apos;</span>,<br />

                    {/* birthday: '2006-01-13', */}
                    birthday<span className='text-teal'>:</span> <span className='text-peach'>{openBrace}</span> <br />
                    <div className='md:pl-8 pl-4'>
                        <Birthday />
                    </div>
                    <span className='text-peach'> {closeBrace}</span>, <br />

                    {/* orientation */}
                    orientation<span className='text-teal'>:</span> <span className='text-green'>&apos;{`${marceline.orientation}`}&apos;</span>,<br />

                    {/* pronouns: she/her */}
                    pronouns<span className='text-teal'>:</span> <span className='text-peach'>[</span>
                    {/* <div className='md:pl-8 pl-4'> */}
                        <span className='text-green'>&apos;{marceline.pronouns}&apos;</span>
                    {/* </div> */}
                    <span className='text-peach'>]</span>,<br />

                    {/* a few interests */}
                    interests<span className='text-teal'>:</span> <span className='text-peach'>[</span><br />
                    <div className='md:pl-8 pl-4'>
                        <Interests />
                    </div>
                    <span className='text-peach'> ]</span>, <br />

                    {/* :3 */}
                    colon<span className='text-teal'>:</span>{' '}
                    <span className='text-peach'>{marceline.colon}</span>, <br />
                </div>
                {/* final closing brace */}
                <span className='text-red'>{closeBrace}</span>
            </div>
    );
}
