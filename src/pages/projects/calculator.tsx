export default function Calculator() {
    return (
        <div className='bg-base p-8 md:px-16 px-8'>
            <div className='w-4/5 m-auto'>
                <h1 className='md:text-4xl text-2xl text-pink font-bold mb-2 drop-shadow-lg'>
                    Calculator
                </h1>
            </div>
            <div className='w-1/4 mx-auto my-12 border-surface1 border-2 rounded-lg'>
                <div className='flex bg-mantle rounded-t-lg px-3 py-2 mb-2'>
                    <span className='text-right md:text-4xl text-3xl w-full'>
                        uhhhhhh what do i do oh god it wraps
                    </span>
                </div>
                <div className='flex flex-wrap bg-mantle justify-between rounded-b-lg p-2 mt-2'>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        7
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        8
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        9
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        X
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        4
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        5
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        6
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        -
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        1
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        2
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        3
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        +
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        0
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        .
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        🠠
                    </div>
                    <div className='bg-surface0 text-center rounded-lg px-5 py-3 my-2 mx-1 w-1/5 transition-all duration-150 hover:bg-surface2 active:bg-surface1'>
                        =
                    </div>
                </div>
            </div>
        </div>
    );
}
