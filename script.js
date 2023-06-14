const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Como Se Llama El Villano Principal?',
    options: [
      {
        text: 'Vecna',
        setState: { blueGoo: true },
        nextText: 3
      },
      {
        text: 'Demogorgon',
        nextText: 2
      }
    ]
  },

  {
    id: 2,
    text: 'Intentalo De Nuevo..',
    options: [
      {
        text: 'Reanudar',
        nextText: -1
      }
    ]
  },
  
  {
    id: 3,
    text: 'Vecna Empieza Atormentar A Los Adolescentes de Hawkins Mientras Que Once Recupera Sus Poderes.Que eligirias?',
    options: [
      {
        text: 'Salva A Once Para Derrotar a Vecna',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 4
      },
      {
        text: 'Ignorar A Vecna Y Sigue Con Lo Tuyo',
        nextText: 5
      }
    ]
  },

  {
    id: 4,
    text: 'Después De Salvar A Once Van En Busca De Vecna Para Derrotarlo..Como derrotarias a vecna?',
    options: [
     
      {
        text: 'Entrar Once como huesped en la vision de max que esta teniendo con vecna para salvarla',
        nextText: 7
      },
      {
        text: 'Entrar Todos Juntos Al Upside Down Con Nancy,Steve,Robin,Dustin y Eddie.',
        nextText: 6
      }
    ]
  },

  {
    id: 5,
    text: 'Vecna Ha Acabado Con Hawkins.. .',
    options: [
      {
        text: 'Intentalo De Nuevo',
        nextText: 1
      },

    ]
  },

  {
    id: 6,
    text: 'Oh No, Vecna ha logrado matar a Max Antes de que todos llegaran a salvarla :(',
    options: [
      {
        text: 'Sigue Intentandolo!',
        nextText: 1
      },
      
     
    ]
  },
  {
    id: 7,
    text: 'Once se reencuentra con vecna y luchan pero vecna logra ganar a once y la ata sobre un arbol mientras trata de matar a max.Que harias?',
    options: [
      {
        text: 'Rendirse',
        nextText: 8
      },
      {
        text: 'Tratar de luchar de nuevo.',
        nextText: 9
      },
      
    ]
  },

  {
    id: 8,
    text: 'Vecna Acabaria con Once Y Max Y No Habria manera de vencer a vecna.',
    options: [
      {
        text: 'Intentalo De Nuevo',
        nextText: 1
      },
     
      
    ]
  },
  {
    id: 9,
    text: 'Once logra desatarse del arbol y sostiene a vecna en el aire con ayuda de Nancy,Robin y Steve al lanzarle fuego,Pero mientras lucas trataba de despertar a Max y en el momento que llego Jason a vengarse de chrissy pensando que el club hellfire la mato,lucas trata de despertar a Max con la musica favorita de max pero jason rompe los auriculares,lucas no pudo despertar a max  ,Jason se va a los golpes y lucas pierde la oportunidad de despertar a max de su vision contra vecna.',
    options: [
      {
        text: 'rendirse',
        nextText: 10
      },
       {
        text: 'Pelear con Jason ',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'lucas podria morir o siendo tambien acusado, y max hubiese muerto por la grieta que se abrio en el piso ',
    options: [
      {
        text: 'Intentalo De Nuevo',
        nextText: 1
      },
      
    ]
  },

  {
    id: 11,
    text: 'Lucas logra ganar ya que Jason muere por la grieta que se abre en el piso por el cuarto asesinato que hace vecna',
    options: [
      {
        text: 'Continuar',
        nextText: 12
      },
      
    ]
  },

   {
    id: 12,
    text: 'Mientras todo esto ocurre,en el upside down,donde eddie y dustin trataba de distraer a los murcielagos lo logran,pero derrepente llegan muchos mas murcielagos y deciden volver al otro lado,pero eddie decide sacrificarse en luchar contra los muercielagos pero no logra ganar y muere en el upside down.',
    options: [
      {
        text: 'Continuar',
        nextText: 13
      },
      
    ]
  },
  {
    id: 13,
    text: 'Once y los demas logran vencer a vecna y todo vuelve a la normalidad Max queda en recuperacion.Aunque deben estar alerta de los sucesos que sigan pasando en hawkins.',
    options: [
      {
        text: 'Continuar',
        nextText: 14
      }
    ]
  },

 
  {
    id: 14,
    text: 'Felicidades! Has logrado vencer a Vecna..',
    options: [
      {
        text: 'Jugar De Nuevo',
        nextText: 1
      },
      
    ]
  },
  
]
startGame()