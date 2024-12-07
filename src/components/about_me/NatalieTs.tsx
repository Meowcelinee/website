import { natalie } from '@/src/data/natalie';

const openBrace = <>&#123;</>;
const closeBrace = <>&#125;</>;

export default function NatalieTs() {
    return (
        <>
            <div>
                {/* const natalie */}
                <span className='text-mauve'>const</span> natalie
                <span className='text-teal'>: </span>
                {/* type declaration */}
                <span className='text-yellow italic'>Nerd</span> ={' '}
                <span className='text-red'>{openBrace}</span>
                <div className='md:pl-8 pl-4'>
                    {/* first name */}
                    firstName<span className='text-teal'>:</span>{' '}
                    <span className='text-green'>'{natalie.firstName}'</span>
                    , <br />
                    {/* middle name */}
                    middleName<span className='text-teal'>:</span>{' '}
                    <span className='text-green'>'{natalie.middleName}'</span>
                    , <br />
                    {/* last name */}
                    lastName<span className='text-teal'>:</span>{' '}
                    <span className='text-green'>'{natalie.lastName}'</span>
                    , <br />
                    {/* birthday */}
                    birthday<span className='text-teal'>:</span>{' '}
                    <span className='text-green'>'{natalie.birthday}'</span>
                    , <br />
                    {/* orientation */}
                    orientation<span className='text-teal'>:</span>{' '}
                    <span className='text-peach'>{openBrace}</span> <br />
                    <div className='md:pl-8 pl-4'>
                        {/* lesbian */}
                        romantic<span className='text-teal'>:</span>{' '}
                        <span className='text-green'>
                            '{natalie.orientation.romantic}'
                        </span>
                        , <br />
                        {/* demisexual */}
                        sexual<span className='text-teal'>:</span>{' '}
                        <span className='text-green'>
                            '{natalie.orientation.sexual}'
                        </span>
                        , <br />
                    </div>
                    <span className='text-peach'>{closeBrace}</span>, <br />
                    {/* pronouns: she/her */}
                    pronouns<span className='text-teal'>:</span>{' '}
                    <span className='text-peach'>[</span> <br />
                    <div className='md:pl-8 pl-4'>
                        <span className='text-green'>'{natalie.pronouns}'</span>
                        , <br />
                    </div>
                    <span className='text-peach'> ]</span>, <br />
                    {/* a few interests */}
                    interests<span className='text-teal'>:</span>{' '}
                    <span className='text-peach'>[</span> <br />
                    <div className='md:pl-8 pl-4'>
                        {natalie.interests?.map(interest => {
                            return (
                                <>
                                    <span className='text-green'>
                                        '{interest}'
                                    </span>
                                    , <br />
                                </>
                            );
                        })}
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
