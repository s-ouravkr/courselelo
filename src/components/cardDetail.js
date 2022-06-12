import React from "react";
import styled from "styled-components";
import Wyl from "../components/Wyl";
import { useSelector } from "react-redux";

const CardDetail = () => {
  const { courseDetail, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <div>
          <OverviewStyle>
            <div className="left-content">
              <h2>{courseDetail.title}</h2>
              <h3>{courseDetail.headline}</h3>
              <p>Rating:-{courseDetail.rating}⭐</p>
              <p className="Instructor_name">
                By:-
                {courseDetail.visible_instructors[0].display_name}
              </p>
              <p>Price :{courseDetail.price} </p>
            </div>

            <div className="right-content">
              <img src={courseDetail.image_480x270} style={{ width: "100%" }} />
            </div>
          </OverviewStyle>

          <ContainerStyle>
            <Wyl />

            <div className="course-includes">
              <ul>
                <h3>This Course includes :</h3>
                <li>
                  <i className="far fa-file-video"></i> 44 hours on-demand video
                </li>
                <li>
                  <i className="far fa-file"></i> 73 articles
                </li>
                <li>
                  <i className="fas fa-download"></i> 38 downloadable resources
                </li>
                <li>
                  <i className="fas fa-infinity"></i> Full liftime access
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i> Access on mobile and TV
                </li>
                <li>
                  <i className="fas fa-medal"></i> Certificate of completion
                </li>
              </ul>
              <div className="enroll">
                <img src={courseDetail.image_240x135} alt="" />
                <button>Enroll Now</button>
              </div>
            </div>

            <div className="description">
              <h3>📃Description</h3>
              <br />
              <div
                dangerouslySetInnerHTML={{ __html: courseDetail.description }}
              />
              <br />
            </div>

            <div className="card">
              <div className="instructor-photo">
                <img
                  src={courseDetail.visible_instructors[0].image_100x100}
                  alt=""
                />
              </div>
              <div className="main">
                <h4>{courseDetail.visible_instructors[0].display_name}</h4>
                <p className="profile">
                  - {courseDetail.visible_instructors[0].job_title}
                </p>
                <p className="main-detail"></p>
              </div>
            </div>

            <div className="course-includes_2">
              <ul>
                <h3>This Course includes :</h3>
                <li>
                  <i className="far fa-file-video"></i> 44 hours on-demand video
                </li>
                <li>
                  <i className="far fa-file"></i> 73 articles
                </li>
                <li>
                  <i className="fas fa-download"></i> 38 downloadable resources
                </li>
                <li>
                  <i className="fas fa-infinity"></i> Full liftime access
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i> Access on mobile and TV
                </li>
                <li>
                  <i className="fas fa-medal"></i> Certificate of completion
                </li>
              </ul>
              <div className="enroll_2">
                <img
                  src="https://img-c.udemycdn.com/course/480x270/2262016_0c8a.jpg"
                  alt=""
                />
                <button>Enroll Now</button>
              </div>
            </div>
          </ContainerStyle>
        </div>
      )}
    </>
  );
};

const OverviewStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem 0;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid red; */
  background-image: linear-gradient(black, #33332d, #859398, #ffffff);

  .left-content {
    width: 50%;
    margin-left: 10%;
    margin-top: 2rem;
  }
  .left-content h2 {
    font-weight: 900;
    font-size: 2rem;
    font-family: "Abril Fatface", cursive;
    color: rgb(245, 245, 245);
  }
  .left-content p {
    font-weight: 900;
  }
  .right-content {
    margin-right: 10%;
    margin-top: 2rem;
    border: 0px solid #33332d;
    box-shadow: -10px 10px #33332d;
  }

  .right-content img {
    width: 25rem;
  }
  @media (max-width: 963px) {
    flex-direction: column;
    align-items: center;

    .left-content {
      width: 90%;
      margin-left: 0;
    }
    .right-content {
      margin-right: 0;
      width: 60%;
      border: 3px solid #33332d;
      box-shadow: -3px 5px #33332d;
    }
  }
`;

const ContainerStyle = styled.div`
  ${"" /* border:2px solid red; */}
  width:60%;
  margin: auto;
  position: relative;
  font-size: 1.5rem;

  .course-includes_2 {
    display: none;
  }
  .course-includes {
    /* display: flex; */
    /* position: absolute; */
    float: right;
    position: sticky;
    top: 8%;
    padding: 2rem;
    /* border: 1px solid black; */
    border: 3px solid #33332d;
    box-shadow: -3px 5px #33332d;
    width: 30%;
    height: 70%;
    /* margin-right: 15%; */
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .course-includes h3 {
    ${"" /* font-family: 'Abril Fatface', cursive; */}
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  ul {
    list-style: none;
  }
  ul li {
    margin-top: 10px;
    font-weight: 600;
    font-size: 1.1rem;
  }
  .course-includes i {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .enroll {
    position: sticky;
    width: 90%;
    margin-top: 2rem;
  }
  .enroll img {
    width: 100%;
  }
  button {
    box-shadow: -3px 5px #33332d;
    padding: 0.6rem 1rem;
    border: 3px solid #33332d;
    font-weight: 600;
    text-align: center;
    margin-top: 1rem;
    color: #000000;
    background-color: white;
    &:hover {
      background-color: #33332d;
      color: white;
    }
  }
  .description {
    width: 70%;
    padding: 2rem 2rem 2rem 0.4rem;
    box-shadow: -0px 0px #33332d;
  }
  .description h3 {
    border-bottom: 1px solid black;
  }
  .card {
    display: flex;
    justify-content: space-between;
    width: 68%;

    border: 1px solid black;
    padding: 2rem;
    border: 3px solid #33332d;
    box-shadow: -3px 5px #33332d;
  }
  .main-detail {
    font-size: 1.1rem;
    margin-top: 0.4rem;
  }
  .instructor-photo {
    margin-right: 1.5rem;
  }
  .instructor-photo img {
    width: 7em;
    height: 6.9em;
    border-radius: 50%;
  }

  @media (max-width: 963px) {
    width: 80%;

    .description {
      width: 100%;
      ${"" /* border:1px solid red; */}
      padding:2rem 2rem 2rem .4rem;
    }

    .description p {
      font-size: 1.2rem;
    }
    .course-includes {
      border: 3px solid #33332d;
      box-shadow: -3px 5px #33332d;
      display: none;
    }
    .card {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .card p,
    h4 {
      text-align: center;
    }
    .course-includes_2 {
      display: flex;
      /* border: 1px solid black; */
      border: 3px solid #33332d;
      box-shadow: -3px 5px #33332d;
      margin-top: 1.5rem;
      padding: 1rem;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;
    }
    .enroll_2 {
      width: 60%;
      margin: 0.5rem auto;
    }
    .course-includes_2 img,
    button {
      width: 100%;
    }
  }
`;

export default CardDetail;
