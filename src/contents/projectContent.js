const data = [
    {
        id: "1",
        title: "Voyages - Tour and Travel",
        tools: [
            "JavaScripts",
            "Html",
            "CSS"
        ],
        content: `<p>Voyages is a website that serves tours and travel by ordering a ticket for tours on the island of Bali. <b class="hl">Helping tourists to find suitable tourist destinations </b> for them to visit without having to buy on the spot or visit the internet.</p> <p>Made with pure JavaScript or vanilla for the logic, CSS using bootstrap for the framework with custom api for the content itself. Estimated build about 2 weeks, starting from idea design to code implementation</p>`,
        image: require('./assets/voyages.png').default,
        demo: "https://voyagess.netlify.app/"
    },
    {
        id: "2",
        title: "influens - UMKM/MSME",
        tools: [
            "ReactJS",
            "ReactBootstrap",
            "ReactRouter",
            "etc"
        ],
        content: `<p>Influens is a web base application that <b class="hl">connects influencers with MSMEs </b>, making it easier to promote their products or services by determining influencers that match the target value.</p><p>Made with library javascript ReactJS for the development, React Bootstrap for display style. Estimated build takes two weeks until the deployment from design to code</p>`,
        image: require('./assets/influens.png').default,
        demo: "https://influens.netlify.app/"
    }
]

export default data