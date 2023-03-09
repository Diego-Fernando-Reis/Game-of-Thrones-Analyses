import ApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Columnchart(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/melhoresep')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  

  const series = [{
    name: 'Servings',
    data: post?.map((e) => {
      return e.Rating;
    })
  }]

  const options = {
    legend: {
      show: false
    },

    colors: ['#E0AD55','#827e57','#7ea3bc','#E0AD55','#55666f','#E0AD55','#c06f64','#a83c1e','#a83c1e','#a83c1e','#a83c1e','#f1f1f3','#7ea3bc'],
    plotOptions: {
      bar:  {
        columnWidth: '60%',
        distributed: true,
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: post?.map((e) => {
        return `${e.season}.${e.episode}`
      }),
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Quantidade de casas',
      },
      tooltip: {
        enabled: true
      },
    }
  }

  return(
    <ApexChart options={options} series={series} type="bar" height={480}/>
  )
}


export default Columnchart;