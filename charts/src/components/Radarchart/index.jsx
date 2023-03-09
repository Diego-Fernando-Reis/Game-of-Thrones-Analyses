import ApexChart from 'react-apexcharts';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Radarchart(){
  const [post,setPost] = useState();

  useEffect(() => {
    axios.get('http://localhost:8800/epseason')
    .then((res) => setPost(res.data))
    .catch((err) => console.log(err))
  });

  const series = [{
    name: 'Series 1',
    data: post?.map((e) => {
      return e.Quantidade_de_ep;
    }),
  }]

  const options = {
    plotOptions: {
      radar: {
        size: 200,
        polygons: {
          strokeColors: '#43464B',
          fill: {
            colors: ['#FFFDDD']
          }
        }
      }
    },
    colors: ['#A51D2F'],
    markers: {
      size: 4,
      colors: ['#A51D2F'],
      strokeColor: '#A51D2F',
      strokeWidth: 2,
    },
    chart: {
      height: 350,
      type: 'radar',
    },
    fill: {
      colors: ['#A51D2F']
      },
    title: {
      text: ''
    },
    xaxis: {
      categories: post?.map((e) => {
        return e.season;
      })
    }
  }

  return(
    <ApexChart options={options} series={series} type="radar" height={480}/>
  )
}


export default Radarchart;