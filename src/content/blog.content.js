
import example from './../assets/img/background.png'

const blogData = [
    {
        type: 'video',
        name: 'Titulo',
        description: ['Parrafo 1',
            'Parrafo 2', 'Parrafo 3'
        ],
        list: ['Lista 1',
            'Lista 2', 'Lista 3'
        ],
        result: 'Aqui Puedes ver el resultado',
        button: '',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        type: 'image',
        name: 'Titulo',
        description: ['Parrafo 1',
            'Parrafo 2', 'Parrafo 3'
        ],
        list: ['Lista 4',
            'Lista 5', 'Lista 6'
        ],
        result: 'Aqui Puedes ver el resultado',
        button: '',
        image: example,
    },
]

export default blogData