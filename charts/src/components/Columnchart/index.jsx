import ApexChart from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Columnchart(){
  const [post, setPost] = useState();

  

  useEffect(()=> {
    axios
    .get('http://localhost:8800/regiao')
    .then((resposta) => {
      setPost(resposta.data)
    })
    .catch((erro) => console.log(erro));
  })





  const series = [{
    name: 'Teste',
    data: post?.map((e) => {
      return e.Quantidade
    })
  }]
 
  const options = {
    colors: ['#E0AD55','#827e57','#7ea3bc','#55666f','#c06f64','#a83c1e'],
    legend: {
      show: false
    },
    plotOptions: {
      
      bar:  {
      
        distributed: true,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
       }
      },
      chart: {
        type: 'bar',
      },
   },
   dataLabels: {
    enabled: true,
    
  },
   xaxis: {
      labels: {
       rotate: -45,
       offsetY: 0,
       style: {
        colors: ["#000"],
        fontSize: '8.5px',
        cssClass: 'apexcharts-xaxis-label',
    },
      },
   categories: post?.map((e) => {
        return e.Regiao
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