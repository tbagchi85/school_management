import React from "react";
import { Route, IndexRoute } from "react-router";

import App from '../App';
import Home from '../views/Home/Index';
import Subjects from '../views/Subjects/Index';
import Students from '../views/Students/Index';
import StudentShow from '../views/Students/Show';
import Teachers from '../views/Teachers/Index';
import TeacherShow from '../views/Teachers/Show';

export default (
  <Route path="/" exact component={App}>
    <IndexRoute component={Home} />
    <Route path="/students" exact component={Students} />
    <Route path="/students/:student_id" exact component={StudentShow} />
    <Route path="/teachers" exact component={Teachers} />
    <Route path="/teachers/:teacher_id" exact component={TeacherShow} />
    <Route path="/subjects" exact component={Subjects} />
  </Route>
);
