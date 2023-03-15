import ApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Columnchart3(){
  const [post, setPost] = useState();


  useEffect(()=> {
    axios
    .get('http://localhost:8800/melhoresseasons')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })

  const series = [{
    name: 'Teste',
    data: post?.map((e) => {
      return Math.trunc(e.media)
    })
  }]

  const options = {
    legend: {
      show: false
    },
    colors: ['#E0AD55','#827e57','#7ea3bc','#55666f','#c06f64','#a83c1e', "#000", '#3d2e07'],
    distributed: true,
    chart: {
      height: 'auto'
    },
    plotOptions: {
      bar:  {
        columnWidth: '60%',
        distributed: true,
      }
    },
    xaxis: {
      title: {
        text: 'Temporadas',
      },
      position: "bottom",
      labels: {
        show: true,
        rotate: -45
      },
      categories: post?.map((e) => {
        return Math.trunc(e.season)
      }),
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Nota da temporada(média)',
      },
      tooltip: {
        enabled: true
      }
    }
  }

  return(
      <ApexChart options={options} series={series} type="bar"/>
    
  )
}

export default Columnchart3;