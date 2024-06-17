import { Button, Card } from "react-bootstrap";
import { Subject } from "../../types/Subject";

type Params = {
    subject: Subject
}

export default function SubjectCard({ subject }: Params) {
    return (
        <Card style={{ width: '300px', height: '200px'}}>
            <Card.Body>
                <Card.Title>
                    {subject.name}
                </Card.Title>
                <Card.Text>
                    {subject.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}