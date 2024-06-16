import React, {useState} from "react";
import Header from "../../components/quiz/Header";

export default function AddQuizzes(){


    return(
      <div>
        <Header/>
        <form>
  <div class="mb-3">
    <label for="Quiz Type" class="form-label">quiz type</label>
    <input type="text" class="form-control" id="Quiz Type" placeholder="Enter Quiz Type"/>
    
  </div>
  <div class="mb-3">
  <label for="New questions" class="form-label">new questions</label>
    <input type="text" class="form-control" id="New questions" placeholder="Enter Questions"/>
  </div>

  <div class="mb-3">
  <label for="Duration Time" class="form-label">Time</label>
    <input type="time" class="form-control" id="Duration Time" placeholder="Enter Time"/>
  </div>

  <div class="mb-3">
  <label for="Number of questions" class="form-label">number of questions</label>
    <input type="number" class="form-control" id="Number of questions" placeholder="Enter Number of questions"/>
  </div>




  

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    )
}
