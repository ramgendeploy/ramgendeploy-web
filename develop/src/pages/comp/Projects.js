import * as React from 'react'
import Project from './Project.js'

const Projects = () => {
  const tar = [
    ['ML', '#6c88ff'],
    ['React', '#a3e29e'],
    ['LSTM', '#d6d65a'],
    ['WIP', '#d68b5a'],
    ['BackBurner', '#eb7def'],
    ['Transformers', '#f6df5a'],
  ]
  const projects = [
    {
      title: '✍ My Blog',
      desc: 'A blog about machine learning and Software in general.',
      img: 'https://ramagg.com/content/images/2020/02/R.png',
      link: 'https://ramagg.com/',
      tags: [tar[0]],
    },
    {
      title: '🎨 DeepArtGallery',
      desc:
        'A gallery about Beautiful Style Transfer images made with TensorFlow and colab.',
      img:
        'https://ramagg.com/deepartgallery/imgs/SpaceX_Falcon_X-Fire-orignal.jpg',
      link: 'https://ramagg.com/deepartgallery',
      tags: [tar[0], tar[1]],
    },
    {
      title: '🤖 Fast.ai Unsplash Classifier',
      desc:
        'This model was trained using fast.ai on images from Unsplash and has 100 labels.',
      img: './static/images/Classifier.png',
      link: 'https://ramagg.com/classifier',
      tags: [tar[0], tar[1]],
    },
    {
      title: '😜 Joke Generator!',
      desc: 'LSTM generator trainend on 1M jokes from of r/jokes.',
      img: './static/images/JokeGenerator.jpg',
      link: 'https://ramagg.com/jokegenerator',
      tags: [tar[0], tar[1]],
    },
    {
      title: '🎥 Youtube Channel',
      desc: 'I upload Tutorials, Courses and Showcase ML models, Subscribe! 🤓',
      img:
        'https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      link: 'https://www.youtube.com/channel/UCJUIogvrTyXFXvi3SegniuA',
      tags: [tar[0]],
    },
    {
      title: '👨‍💻 React Projects',
      desc: 'Random react projects that I made, check it out on my github!',
      img: './static/images/AudioPlayer.png',
      link: 'https://github.com/ramgendeploy/April2020Projects',
      tags: [tar[1]],
    },
    {
      title: '🐦 Twitter snippets',
      desc:
        'Gallery of code snippets, Cheatsheets, and Random snippets of knowledge that i drop on twitter! (also follow me🎉).',
      img:
        'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      link: 'https://twitter.com/ramgendeploy',
      tags: [tar[0], tar[1], tar[3]],
    },
    {
      title: '🆓 Algorithm Free Course',
      desc:
        'Course on algorithms, Learn how to implement and understand useful and cool algorithms!',
      img:
        'https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      link: 'https://www.youtube.com/channel/UCJUIogvrTyXFXvi3SegniuA',
      tags: [tar[3], tar[4]],
    },
    {
      title: '👩‍🎤GPT-2 Lyric Generator',
      desc:
        'Use the (Generative Pre-trained Transformer 2) GPT-2 model and transfer learning to make a lyric Generator !',
      img:
        'https://images.unsplash.com/photo-1542367906-cfaaad7277db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      link: 'https://www.youtube.com/channel/UCJUIogvrTyXFXvi3SegniuA',
      tags: [tar[0], tar[5], tar[3], tar[4]],
    },
    {
      title: '🎼Generating audio with ML',
      desc: 'Models and general concepts to generate Audio!',
      img:
        'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      link: 'https://www.youtube.com/channel/UCJUIogvrTyXFXvi3SegniuA',
      tags: [tar[0], tar[3], tar[4]],
    },
    {
      title: '📚Appling GPT-2 to different problems',
      desc:
        'Use the GPT-2 model in different problems and deploy an app to show results in near realtime.',
      img:
        'https://images.unsplash.com/photo-1575755049931-8338ad979f7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      link: 'https://www.youtube.com/channel/UCJUIogvrTyXFXvi3SegniuA',
      tags: [tar[0], tar[5], tar[3], tar[4]],
    },
    {
      title: '🤖Text-to-Speech {TTS} Models and Concepts',
      desc:
        'Models to get the best TTS results How to deploy and scale these models.',
      img:
        'https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      link: 'https://www.youtube.com/channel/UCJUIogvrTyXFXvi3SegniuA',
      tags: [tar[0], tar[3], tar[4]],
    },
  ]
  return (
    <div class="projects">
      {projects.map((project) => {
        return (
          <Project
            title={project.title}
            description={project.desc}
            img_src={project.img}
            link={project.link}
            tags={project.tags}
          />
        )
      })}
    </div>
  )
}

export default Projects
