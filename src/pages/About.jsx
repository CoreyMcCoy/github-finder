function About() {
    return (
        <>
            <h1 className='text-6xl mb-4'>Github Finder</h1>
            <p className='mb-8 text-2xl font-light'>A React app to search GitHub profiles and see profile details.</p>
            <p className='text-lg text-gray-400 mb-1'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By:
                <a className='text-white px-1' href='https://twitter.com/hassibmoddasser'>
                    Hassib Moddasser
                </a>
            </p>
        </>
    );
}
export default About;