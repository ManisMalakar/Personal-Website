
const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'NodeJS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React Native',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Ajax',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Hooks',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'REST',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MySQL',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },

  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Keras',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'CUDA',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML5 + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Amazon Web Services(AWS)',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'Data Science', 'Python'],
  }
].map((skill) => ({ ...skill, category: skill.category.sort() }));


const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
