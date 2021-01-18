import React from 'react';
import { Form, TextInput, Button } from 'carbon-components-react';
import { ArrowRight24 } from '@carbon/icons-react';



const LoginPage = () => {
  return (
    <div className="bx--grid login-page__container">
      <div className="bx--row">
        <div className="bx--col-lg-7">
          <h1 className="login-page__title"><strong>Z </strong> | Connect</h1>
          <p>Connect to z/Os on mobile</p>

          <Form>
            <TextInput
              id="test2"
              invalidText="Invalid error message."
              labelText="User Name"
              placeholder="enter username "
            />
            <TextInput
              id="test2"
              invalidText="Invalid error message."
              labelText="Password"
              placeholder="your password here"
            />
            <TextInput
              id="test2"
              invalidText="Invalid error message."
              labelText="Web Url"
              placeholder="https://<ip address>:<port>"
            />
            <Button
              className="submit-button"
              kind="primary"
              tabIndex={0}
              type="submit"
              renderIcon={ArrowRight24}
            >
              Continue
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
