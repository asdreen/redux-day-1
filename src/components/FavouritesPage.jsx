import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { removeFromFavouriteAction } from "../Redux/actions/index";

export default function FavouritesPage() {
  const jobs = useSelector((state) => state.jobs.content);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className="flex-column justify-items-center align-items-center text-center">
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            <h1 className="mt-2 text-center">Favourite Companies</h1>
            {jobs.map((job, i) => (
              <li key={i} className="my-4">
                <Link to={`/${job.company_name}`}>{job.data.company_name}</Link>
                <p>{job.title}</p>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFromFavouriteAction(i));
                  }}
                >
                  Delete
                </Button>
              </li>
            ))}
            <Button variant="info" onClick={() => navigate(-1)}>
              Back
            </Button>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
