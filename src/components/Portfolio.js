import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import me from '../images/me.jpeg'
import photo from '../images/photo.png'
import adobe from '../images/adobe.png'
import ux from '../images/ux.png'
import web from '../images/website.jpeg'
import book from '../images/book.jpeg'
import brand from '../images/brand1.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Portfolio(){
    return(
        <div className="home">
           
     <Navbar style={{marginRight:"50px"}} >
    <Container fluid >
        <Navbar.Brand href=".home" style={{fontWeight:"bold",letterSpacing:".14rem",color:"#e6ab1f",marginLeft:"30px"}}>ViCKY</Navbar.Brand>
          <Nav  style={{fontWeight:"bold",letterSpacing:".14rem",color:"white"}} className="nav-item">
            <Nav.Link href=".home" style={{color:"white",backgroundColor:"#e6ab1f",marginRight:"30px"}}>Home</Nav.Link>
            <Nav.Link href="#about" style={{color:"white",marginRight:"30px"}}>About</Nav.Link>
            <Nav.Link href="#projects"style={{color:"white",marginRight:"30px"}} >Projects</Nav.Link>
            <Nav.Link href="#contact" style={{color:"white",marginRight:"30px"}}>Contact</Nav.Link>
          </Nav>
          </Container>
      </Navbar>
     <div className="header">
        
       <div className="header-txt">
       <h1 >Thoughtful Brand Design</h1>
        <p >for independent creatives</p>
       <a href="#about"> <Button style={{backgroundColor:"#e6ab1f",color:"white",border:"none",fontWeight:"bold",letterSpacing:".14rem"}} variant="light">VIEW MY WORK</Button>{' '}</a>
       </div>
        <div id="about">
        <AnimationOnScroll animateIn="animate__bounceIn">
            <h2 className="about-txt" style={{color:"#e6ab1f",fontWeight:"bold",borderBottom:"5px solid #e6ab1f",padding:"20px"}} >About Me </h2>
            </AnimationOnScroll>
            <p className="about-parag">Hi, my name is Vicky , I'm an award-winning Graphic Designer. With agency experience, I'm well-versed in digital, branding, and print design and knows how to work at a brisk pace. Also, I'm an avid reader has even designed a few books cover to cover, giving me advanced skill in typography.</p>
        </div>

     </div>
        
    <div className="skills">
    
        <div className="uxDesig">
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Image src={ux} style={{width:"200px"}}/>
            <h5 style={{position:"relative",bottom:"13px"}}>UI/UX Designer</h5>
            </AnimationOnScroll>
        </div>
        <div className="photo">
            <AnimationOnScroll animateIn="animate__bounceIn">
            <Image src={photo} style={{width:"100px"}}/>
            <h5 >Photoshop</h5>
            </AnimationOnScroll>
        </div>
        <div className="adobe">
        <AnimationOnScroll animateIn="animate__bounceIn">
            <Image src={adobe} style={{width:"100px"}}/>
            <h5>Adobe premier</h5>
            </AnimationOnScroll>
        </div>
        </div>
        <AnimationOnScroll animateIn="animate__bounceIn">
        <h2 className="proj-txt">PROJECTS</h2>
        </AnimationOnScroll>
      <div id="projects" >
      <div className="caro" >
        <Carousel  variant="dark" style={{marginTop:"300px"}}>
      <Carousel.Item>
        <img
        width={900}
        height={600}
          src={book}
          className="imgs"
          alt="First slide"
        />
         <Carousel.Caption>
          <h3 style={{color:"black",fontWeight:"bold",letterSpacing:".14rem"}}>Book Cover</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
          width={900}
          height={600}
          src={web}
          className="imgs"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"black",fontWeight:"bold",letterSpacing:".14rem"}}>Character Illustration</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        width={900}
        height={600}
          src={brand}
          className="imgs"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"black",fontWeight:"bold",letterSpacing:".14rem"}}>Branding</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
        
      </div>
      <AnimationOnScroll animateIn="animate__bounceIn">
      <h2 className="contact-txt">CONTACT ME</h2>
      </AnimationOnScroll>
      <div id="contact">
     
      <Form style={{width:400}} className="form">
<Form.Group className='mb-3'>
         
          <Form.Control type="text" 
                        placeholder="Name" />
        </Form.Group>
        <Form.Group className='mb-3'>
         
          <Form.Control type="email" 
                        placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3}  placeholder="Message" />
      </Form.Group>
      <Button  type="submit" className="submit" >
        Submit
      </Button>
      </Form>
      </div>
      <footer className="footer">
        <p>Vicky © 2022 | All Rights Reserved </p>
      </footer>
        </div>
    )
}