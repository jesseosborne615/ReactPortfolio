



/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jesse",
    lastName: "Osborne",
    initials: "jo", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
     // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
       
        {
        
            text: 'Orlando Based'
        },
        {
           
            text: "Recent UCF Bootcamp Graduate"
        },
        {
            
            text: "jesseosborne615@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/jesse__osborne",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/jesseosborne615",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/jesseosborne615",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, I'm Jesse, a Full Stack Developer. I am a recent graduate bootcamp graduate from the UCF. I have a passion for designing. We should talk!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            
        },
        
        {
            label: 'animals',
        },
        {
            label: 'meeting new people',
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Netflix Review Resource",
            live: "https://averynewhart.github.io/Netflix-Review-Resource/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/AveryNewhart/Netflix-Review-Resource", // this should be a link to the **repository** of the project, where the code is hosted.
            
        },
        {
            title: "git_to_work",
            live: "https://www.google.com",
            source: "https://github.com/jesseosborne615",
        },
      
           
    ]
}