var decisionTree = {
    'video': 'videos/E.mp4',
    'question': 'Cosa posso fare adesso?',
    'choices': [
      {
        'name': 'La cacca', 
        'video': 'videos/A.mp4',
        'question': 'Hai fatto la cacca, bravo. E adesso che famo?',
        'choices': [
            {'name': 'Andiamo a casa', 'video': 'videos/C.mp4'},
            {'name': 'Andiamo a drogarci', 'video': 'videos/D.mp4'}
        ]
      },
      
      {
        'name': 'La doccia', 
        'video': 'videos/B.mp4',
        'question': 'Hai fatto la doccia, meno male. Adesso che sei pulito',
        'choices': [
          {'name': 'Andiamo a dormire', 'video': 'videos/D.mp4'},
          {'name': 'Andiamo a drogarci', 'video': 'videos/C.mp4'}
        ]
      }
    ]
  }