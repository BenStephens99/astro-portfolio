<div class="about-me">
    <div>
        <h2>Summary</h2>
        <p>
            My expertise lies in creating intuitive and
            engaging user interfaces, driven by a keen eye for detail and a
            solid foundation in computer science principles.
        </p>
        <p>
            At Barkweb, I have made significant contributions by developing and
            enhancing the user interface of the company's site builder, Jolojo.
            My work focuses on creating user-friendly interfaces that provide
            extensive customisation options while ensuring ease of use with my
            core strengths lying in JavaScript, SCSS and Tailwind CSS.
        </p>
        <p>
            In my spare time, I enjoy working on personal projects that allow me
            to experiment with new technologies and techniques. Currently, for my more complex applications,
            I like to use NextJS, React and a BASS such as Firebase or Pocketbase. For my simpler
            applications I like to use Astro combined with Svelte.

        </p>
        <p>
            I thrive on solving complex problems and continuously seek
            opportunities to learn and grow. Feel free to get in touch if you
            have any questions, ideas to share, or just want to connect.
        </p>
    </div>
    <div>
        <div>
            <h2>Education</h2>
            <div class="experience">
                <p class="location">University of Brighton</p>
                <p class="position">Computer Science for Games BSc (Hons)</p>
                <ul>
                    <li>Graduated with First Class Honours</li>
                </ul>
            </div>
        </div>
        <div>
            <h2>Experience</h2>
            <div class="experience">
                <p class="location">Barkweb</p>
                <p class="position">Front-end Web Developer</p>
                <ul>
                    <li>
                        Made major improvements to the company's site builder,
                        Jolojo.
                    </li>
                    <li>
                        Upgraded existing functionality such as e-commerce, user
                        management, and content blocks.
                    </li>
                    <li>
                        Added new features, such as a typography editor, colour
                        variables, and animations.
                    </li>
                    <li>
                        Created new plugins that offer in-depth customisation
                        options while still being user-friendly enough for
                        clients to edit their own sites.
                    </li>
                    <li>
                        Developed APIs in Go to supply the front end with
                        essential functionality.
                    </li>
                    <li>Built SCSS templates for multiple client sites.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .about-me {
        width: 100%;
        max-width: var(--content-width);
        margin: 0 auto;
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 5fr 3fr;
        padding: 0 2rem;
        column-gap: 4rem;
        row-gap: 1rem;

        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 650px) {
            grid-template-columns: 1fr;
            margin-top: 1rem;
            padding: 0 1rem;
        }
    }

    h2 {
        border-bottom: 1px solid var(--accent);
        width: fit-content;
    }

    .position {
        margin-top: 0.2rem;
    }

    .location {
        margin-bottom: 0;
        font-weight: bold;
    }

    .experience {
        margin-bottom: 2rem;
    }
</style>
