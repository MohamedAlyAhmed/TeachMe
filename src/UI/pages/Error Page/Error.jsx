import React from "react";
import "./Error.css";

export default function Error() {
  document.title = `Error 404`;
  return (
    <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center align-items-center">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="content_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <p>The page you are looking for not available!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
