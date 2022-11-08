import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <div>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 d-flex justify-content-center align-items-center">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>

                <div class="content_box_404">
                  <h3 class="h2">Look like you're lost</h3>
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
