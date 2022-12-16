import { observer } from "mobx-react-lite";
import { Card, Col, Image } from "react-bootstrap";


const DeviceItem = observer( ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div>
                    <div>Samsung</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
            </Card>
        </Col>
    );
})

export default DeviceItem;