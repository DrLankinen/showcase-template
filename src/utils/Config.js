const questionTypes = ['SELECT', 'TEXT'];

module.exports = {
  // Changes text different places of the website
  txts: {
    title: 'Hello World!',
    joinButton: 'Download',
    enterEmailPlaceholder: 'Enter email',
    sendEmailButton: 'Go!',
    skipQuestions: 'skip',
    nextQuestion: 'next 👉',
    thankYouTitle: '🥳 Thank you for registering!',
    thankYouContent:
      'The product is still under development but we will let you know when it is ready for the early users.',
    firstEmoji: '🙈',
    secondEmoji: '🙉',
    thirdEmoji: '🙊',
    firstSectionContent: 'See. This is what text looks like here.',
    secondSectionContent: 'Hear. This is what text sounds like here.',
    thirdSectionContent: 'Talk. This is what text talks like here.',
  },
  // Show video or image on the top.
  // Video requires video.mp4 file in asset folder
  // Image requires image.jpg file in asset folder
  showVideoBackground: true,
  // Use the same collection name you used in Firebase
  collectionName: 'test',
  // Select button used in certain type of questions.
  selectedButtonColor: 'forestgreen',
  // Questions and some infromation about them.
  // Asked in this order.
  // Check model config for to understand the question structure: https://github.com/RealLankinen/showcase-template/blob/master/src/utils/Config.js
  questions: [
    {
      type: questionTypes[0],
      title: 'Do you code?',
      options: ['yes', 'no'],
      multiple: false,
      other: 'other',
    },
    {
      type: questionTypes[1],
      title: 'What you do for living?',
      short: true,
    },
    {
      type: questionTypes[0],
      title: 'What kind of apps you use daily?',
      options: ['Social Media', 'News', 'Games', 'Utility', 'Email'],
      multiple: true,
      other: 'Other',
    },
    {
      type: questionTypes[1],
      title: 'Where do you need this?',
      short: false,
    },
  ],
};
