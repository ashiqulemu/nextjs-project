import Link from 'next/link';
export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                         <Link href="/">
                               <a className='emu'>Back to home </a>
                                    {

                                    /* // To add attributes like className, target, rel, etc. 
                                    // add them to the <a> tag, not to the <Link>  */

                                    }
                         </Link>
                    </h2>
                </>
                );
    
}