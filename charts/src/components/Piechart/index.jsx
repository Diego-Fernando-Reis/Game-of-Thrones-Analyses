import img1 from '../../img/Casa_Stark.webp'
import img2 from '../../img/Casa_Lannister.webp'
import img3 from '../../img/Casa_Baratheon.webp'
import ApexChart from 'react-apexcharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Piechart(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/tempoep')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  console.log(post)

  let a = post?.map((e) => {
    return e.maior60;
  })

  let b = post?.map((e) => {
    return e.menor55;
  })

  let c = post?.map((e) => {
    return e.between5560;
  })

  let series = [parseInt(a),parseInt(b),parseInt(c)]

  console.log('series :' + a)

  const options = {
    colors: ['#ffff00','#cb0e00','#c8cdcd'],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Maior que 60', 'Entre 55 e 60', 'Menor que 55'],
      fill: {
        type: 'image',
        opacity: 0.85,
        image: {
           src: [img3,img2,img1],
          width: 1,
          imagedHeight: 1
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
  }

  return(
    <ApexChart options={options} series={series} type="pie" height={480}/>
  )
}

export default Piechart;