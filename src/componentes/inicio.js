import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PokemonCard({pokemon}) {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pokemon.sprites.other.official-artwork.front_default} />
            <Card.Body>
              <span>{pokemon.id}</span>
              <Card.Title>{pokemon.name}</Card.Title>
          
              <Card.Text>
                {pokemon.types.map(type=>{
                  return(
                    <span>{type.type.name}</span>
                  )
                })}
                
                <span></span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;