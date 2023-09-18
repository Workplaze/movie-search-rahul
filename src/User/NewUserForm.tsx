import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER, GET_USER } from "../Queries/queries";

import styled from "styled-components";
import { Button } from "../Components/Button";
import Loader from "../Components/Loader";

const FormWrapper = styled.section`
  margin: 1rem 0;
  padding: 1rem;
`;

const InputWrapper = styled.div`
  margin: 0.5rem 0;
`;

const Label = styled.label`
  display: block;
  margin: 0 0 0.5rem;
  text-transform: capitalize;
  color: #28292f;
`;

const InlineLabel = styled(Label)`
  display: inline-block;
`;

const Input = styled.input`
  border: none;
  background-color: #e0e3f9;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

const NewUserForm = (props: { closeModal: () => void }) => {
  const [mutationFn, { loading }] = useMutation(CREATE_USER);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    props.closeModal();
    mutationFn({
      variables: {
        input: {
          first_name: firstName,
          last_name: lastName,
          dob: dob,
          age: age,
          contact_number: contact,
          email: email,
          gender: "Male",
          role_id: "d97e22e2-4573-4e6c-a3f4-1893b2fed610",
          status_id: "af2e74cd-feec-4f08-b703-8eb7d32ff29e",
        },
        userRoleInput: {
          role: "free",
        },
      },
      refetchQueries:[
        {
            query: GET_USER
        }
      ]
    }, );
  };

  if (loading) return <Loader />;

  return (
    <FormWrapper>
      <form onSubmit={formSubmitHandler}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Last Name*"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="dob">D.O.B</Label>
          <Input
            type="date"
            placeholder="DOB "
            required
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Age "
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="gender"> Gender </Label>
          <div>
            <div>
              <Input type="radio" id="male" />
              <InlineLabel htmlFor="male"> Male </InlineLabel>
            </div>
            <div>
              <Input type="radio" id="female" />
              <InlineLabel htmlFor="female"> Female </InlineLabel>
            </div>
          </div>
        </InputWrapper>

        <InputWrapper>
          <Input
            type="email"
            placeholder="Email Id "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="tel"
            placeholder="Mobile Number "
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Button type="submit" color="green">
            Create
          </Button>
        </InputWrapper>
      </form>
    </FormWrapper>
  );
};

export default NewUserForm;
