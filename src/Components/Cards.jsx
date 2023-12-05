import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function Cards({ articles }) {


    function formatTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const secondsPast = (now.getTime() - date.getTime()) / 1000;

        if (secondsPast < 60) {
            return parseInt(secondsPast) + ' seconds ago';
        }
        if (secondsPast < 3600) {
            return parseInt(secondsPast / 60) + ' minutes ago';
        }
        if (secondsPast <= 86400) {
            return parseInt(secondsPast / 3600) + ' hours ago';
        }
        if (secondsPast > 86400 && secondsPast <= 604800) {
            const day = parseInt(secondsPast / 86400);
            return day + ' day' + (day !== 1 ? 's' : '') + ' ago';
        }
        if (secondsPast > 604800 && secondsPast <= 2629800) {
            const week = parseInt(secondsPast / 604800);
            return week + ' week' + (week !== 1 ? 's' : '') + ' ago';
        }
        if (secondsPast > 2629800 && secondsPast <= 31557600) {
            const month = parseInt(secondsPast / 2629800);
            return month + ' month' + (month !== 1 ? 's' : '') + ' ago';
        }
        if (secondsPast > 31557600) {
            const year = parseInt(secondsPast / 31557600);
            return year + ' year' + (year !== 1 ? 's' : '') + ' ago';
        }
    }


    return (
        <Container>
            <Row className="justify-content-center">
                {
                    articles.map((article, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className='mb-5'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={article.urlToImage ? article.urlToImage : 'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG5ld3N8ZW58MHx8MHx8fDA%3D'} style={{ height: '200px' }} />
                                <Card.Body>
                                    <Card.Title style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{article.title}</Card.Title>
                                    <Card.Text style={{ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {article.description}
                                    </Card.Text>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                                        <p style={{ fontSize: 'small', color: 'grey', marginTop: '15px' }}>{formatTime(article.publishedAt)}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Cards;