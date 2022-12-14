import React from 'react';
import { PageHeader, Row, Col } from '@lipihipi/ec-ui';

export default function ManageResumesList() {
  return (
    <>
      <section className="main-structure">
        <PageHeader
          title={'Mock Interviews'}
          breadCrumbs={[{ title: 'Mock Interviews', link: '/' }]}
        />

        <div className="my-performance">
          <div className="my-performance--box">
            <div className="performance-chart">
              <img src={'data:image/png;base64,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'} alt="chart"/>
            </div>
            <div className="info">
              <p>Currently you dont have any report!</p>
              <p>
                Attempt any of the mock Interview to see{' '}
                <span>your performance</span>
              </p>
            </div>
          </div>
        </div>

        <div className="my-resume">
          <div className="my-resume--header">
            <a href="/">Submit resume</a>
          </div>
          <div className="my-resume--body">
            <div className="interview-list">
              <h4>Pack of Interviews - 5</h4>
              <ul>
                <li>
                  <p>Total Attemps - 5</p>
                  <p>Total Attemps - 5</p>
                </li>
                <li>
                  <a href="/">Attempt Now</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="attempts-list">
          <ul>
            <li>
              <p>1st Attempt</p>
              <p>23rd Oct 2020 at 17:30</p>
            </li>
            <li>
              <a href="/">View Report</a>
            </li>
          </ul>
        </div>

        <div className="attempts-list">
          <ul>
            <li>
              <p>2nd Attempt</p>
              <p>23rd Oct 2020 at 17:30</p>
            </li>
            <li>
              <a href="/">View Report</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="main-structure">
        <PageHeader
          title={'Mock Interviews'}
          breadCrumbs={[
            { title: 'Mock Interviews', link: '/' },
            { title: 'Pack Of Interviews-5', link: '/' },
          ]}
        />

        <div className="test-full-view">
          <div className="wrap">
            <h3>Pack of Interviews - 5</h3>
            <Row spacing={20} className="mb-5">
              <Col xs={12} sm={4}>
                <img src={'data:image/png;base64,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'}/>
              </Col>
              <Col xs={12} sm={8}>
                <p>
                  Earum incidunt autem asperiores vel quo. Qui ullam dolores
                  reiciendis sed cum odio eos expedita. Voluptatum quae aut non
                  eaque. Cum dolorem laboriosam et omnis qui est et excepturi.
                  Suscipit atque illum et non doloremque quae excepturi.
                </p>
                <p>
                  Aut sunt debitis quisquam. Esse nesciunt non nihil nesciunt in
                  odio cum. Nobis aliquam ullam veritatis. Ullam minus sit neque
                  repellat.
                </p>
              </Col>
            </Row>

            <p>
              <strong>
                Earum incidunt autem asperiores vel quo. Qui ullam dolores
                reiciendis sed cum odio eos expedita.
              </strong>
            </p>

            <ul>
              <li>
                You will get 5 atempts to perform AI based bock Interview
                Practice
              </li>
              <li>
                <strong>₹ 1500</strong>
                <a href="/">Subscribe</a>
              </li>
            </ul>
          </div>

          <div className="links-wrap">
            <a href="/">See a sample report</a>
            <a href="/">View Demo video</a>
          </div>
        </div>

        <div className="practice-mock">
          <h3>
            Available options
            <a href="/">View all options</a>
          </h3>
          <Row spacing={20}>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>No of Attemps - 1</li>
                    <li>
                      <strong className="price">₹ 20,000</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>No of Attemps - 15</li>
                    <li>
                      <strong className="price">₹ 20,000</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>No of Attemps - 15</li>
                    <li>
                      <strong className="price">₹ 20,000</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="main-structure">
        <PageHeader
          title={'Mock Interviews'}
          breadCrumbs={[{ title: 'Mock Interviews', link: '/' }]}
        />

        <div className="my-performance">
          <h3>My Performance insights</h3>
          <div className="my-performance--box">
            <div className="performance-chart">
              <img src={'data:image/png;base64,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'}/>
            </div>
            <div className="info">
              <p>Currently you dont have any report!</p>
              <p>
                Attempt any of the mock Interview to see{' '}
                <span>your performance</span>
              </p>
            </div>
          </div>
        </div>

        <div className="subscribed-test">
          <h3>My Subscribed Mock Interview sets</h3>
          <Row spacing={20}>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="subscribed">Subscribed</strong>
                    </li>
                  </ul>
                </div>
                <div className="mock-test-card--footer">
                  <a href="/">Attempt Now</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="practice-mock">
          <h3>AI Mock Interviews for Practice</h3>
          <p>
            Earum incidunt autem asperiores vel quo. Qui ullam dolores
            reiciendis sed cum odio eos expedita. Voluptatum quae aut non eaque.
            Cum dolorem laboriosam et omnis qui est et excepturi. Suscipit atque
            illum et non doloremque quae excepturi.
          </p>
          <p>
            Aut sunt debitis quisquam. Esse nesciunt non nihil nesciunt in odio
            cum. Nobis aliquam ullam veritatis. Ullam minus sit neque repellat.
          </p>

          <p>
            <strong>
              Earum incidunt autem asperiores vel quo. Qui ullam dolores
              reiciendis sed cum odio eos expedita.
            </strong>
          </p>
          <Row spacing={20}>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="subscribed">Subscribed</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="subscribed">Subscribed</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="subscribed">Subscribed</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="subscribed">Subscribed</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="subscribed">Subscribed</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={4}>
              <div className="mock-test-card">
                <div className="mock-test-card--header">
                  <img src={'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80'} alt="Interview" />
                </div>
                <div className="mock-test-card--body">
                  <h4>Pack of Interviews - 15</h4>
                  <p>
                    This pack contains 15 links of Mock Interviews, you can
                    practice for 15 times and see the ....
                  </p>
                  <ul>
                    <li>Attempted - 2/15</li>
                    <li>
                      <strong className="price">₹ 20,000</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
