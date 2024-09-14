import { useEffect, useState } from "react";
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "../api/TodosApi";
import { useAuth } from "../security/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TodoUpdateComponent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const authContext = useAuth();
  const username = authContext.username;

  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => fetchTodoDetails(), [id]);

  function fetchTodoDetails() {
    console.log("id: ", id);
    if (id != -1) {
      retrieveTodoApi(username, id)
        .then((response) => {
          console.log(response);
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function onSubmit(values) {
    console.log("values: ", values);

    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    console.log(todo);

    if (id != -1) {
      updateTodoApi(username, id, todo)
        .then((response) => {
          navigate("/todos");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      createTodoApi(username, todo)
        .then((response) => {
          navigate("/todos");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function validate(values) {
    let errors = {
      // description: "",
      // targetDate: "",
    };

    if (values.description.length < 5) {
      errors.description = "Enter at least 5 Characters in Description";
    }

    return errors;
  }
  return (
    <div>
      <center>
        <h1>Todo Update Component</h1>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
        >
          {(props) => (
            <div>
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                {/* for description */}
                <fieldset className="form-group p-4">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>

                {/* //for target date */}
                <fieldset className="form-group p-4">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <div>
                  <button className="btn btn-success m-5" type="submit">
                    Save
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </center>
    </div>
  );
}
