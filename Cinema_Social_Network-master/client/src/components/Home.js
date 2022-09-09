import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

import Movie from './Movie';
import { useNavigate } from "react-router-dom";

function setFilms(temp, data){
    temp = data;
}

function Home (){
    //console.log(props.err);

    const [temp, setFilms] = useState([]);
    
    // useEffect(() => {
    //     Axios
    //         .get("http://localhost:3001/home")
    //         .then(response => {
    //             //setfilms(response.data);
    //         });
    // }, []);

    
    useEffect(() => {
        const expensesListResp = async () => {
        await axios.get('http://localhost:3001/home')
        .then(
            res => setFilms(res.data))
        }
        expensesListResp();
    }, []);
    
    // useEffect(() => {
    //     axios.get("http://localhost:3001/home").then(
    //     res => {
    //         setFilms(res.data)
    //         console.log(res.data);
    //       }
        
    // )
        
        
    //   }, []);
    
   console.log(temp);
    

  
    
    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = `movie${id}`;
        navigate(path);
    }

    function selectMovie(movie) {
        console.log(movie);
        routeChange(movie);
    }
    

    const films = temp.data.map(
        (movie) => {
            return (


                <div className="col-12 col-md m-1">
                    <Movie item={movie} onSelectMovie={selectMovie} />
                </div>

            );
        }
    );

    return (

        <div className="container">
            <div className="row align-items-start">
                {films}
            </div>
        </div>
    );
         
}

const RenderCard = ({ item, siteSelectedCallback }) => (
        <a style={{ cursor: 'pointer' }} onClick={siteSelectedCallback}>
        <Card 
            body
            inverse
            style={{
                backgroundColor: '#333',
                borderColor: '#333'
            }}
        >
                <CardImg src={item.source} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.movie_title}</CardTitle>
                </CardBody>
            </Card>
            <div>card</div>
        </a>
        
);

// class Home extends Component {

//         constructor(props) {
//             super(props);   
//             this.state ={
//                 selectedMovieId:""
//             }     
//             this.selectMovie = this.selectMovie.bind(this);
//         }
        
//         selectMovie(movie){
//             let navigate = useNavigate(); 
//             this.setState({selectedMovie:movie});
//             console.log(movie);
//             let path = `/movie/${this.state.selectedMovieId}`; 
//             navigate(path);
//         }
        
   
//         render() {

            
         
//             console.log(this.props.err);
//             const films = this.props.data.map(
//                 (movie) => {
//                 return (
                    
                         
//                             <div className="col-12 col-md m-1">
//                                 <Movie item={movie} onSelectMovie={this.selectMovie}  />
//                             </div>

//                 );
//             }
//             );

//             return(

//                 <div className="container">
//                     <div className="row align-items-start">
//                     {films}
                    
//                     </div>
//                 </div>
//             );
         
//         }
        
   
// }

export default Home;