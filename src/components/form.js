import { Col, Form, Row } from "react-bootstrap";

export default function Forms({ bgColor = "#F5F5F5" }) {
  return (
    <div>
      <div className="py-[20px] px-[50px] w-full " style={{backgroundColor: bgColor}}>
        <h1 className="text-center text-[18px] font-[600]"> CONTACT FORM</h1>
        <p className="text-center font-[600]">We'd Love to Hear</p>

        <div className="mt-4">
          <Form>
            <Row>
              <Col className="" lg={6} md={6} sm={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-[700]">Name </Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-[700]">Email </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-[700]">Phone Number </Form.Label>
                  <Form.Control type="number" placeholder="Enter your phone" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-[700]">What are you </Form.Label>
                  <Form.Select>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="" lg={6} md={6} sm={12}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="font-[700]">Purpose </Form.Label>
                  <Form.Select>
                    <option> select</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="font-[700]">Message </Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Col>
              <div>
                <button className="float-right my-[50px] py-2 px-4  font-[400] rounded w-[100px]  bg-[red] text-white  ">
                  Submit
                </button>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
