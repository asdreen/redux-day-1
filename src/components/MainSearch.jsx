import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobAction, saveSearchInput } from "../Redux/actions/index";
import Job from "./Job";

const MainSearch = () => {
  const query = useSelector((state) => state.value.value);
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(saveSearchInput(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 text-center ">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
          <Link to="./favourites" className="mx-auto my-3 text-center ">
            <h2>Check Job Favourites</h2>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        {isError ? (
          <Alert variant="danger">Error</Alert>
        ) : isLoading ? (
          <Spinner animation="border" />
        ) : (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
