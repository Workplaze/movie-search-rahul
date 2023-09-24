import { useState } from "react";

import { useMutation } from "@apollo/client";
import {
  CREATE_USER,
  GET_USER,
  UPDATE_USER_INFO,
  GET_USER_BY_ID,
} from "../Queries/queries";

import { toast } from "react-toastify";
import Loader from "../Components/Loader";

import { Button } from "../Components/Button";
import {
  FormWrapper,
  InputWrapper,
  InlineLabel,
  Input,
  InputControlWrapper,
  InputGroupTitle,
} from "../Components/Form";

import { Form } from "../Common/types";

const InputForm = ({ title, closeModal, defaultValues, id }: Form) => {
  //form states
  const [firstName, setFirstName] = useState<string | undefined>(
    defaultValues?.first_name
  );
  const [lastName, setLastName] = useState<string | undefined>(
    defaultValues?.last_name
  );
  const [dob, setDob] = useState<string | undefined>(defaultValues?.dob);
  const [age, setAge] = useState<string | undefined>(defaultValues?.age);
  const [email, setEmail] = useState<string | undefined>(defaultValues?.email);
  const [contact, setContact] = useState<string | undefined>(
    defaultValues?.contact_number
  );
  const [gender, setGender] = useState<string | undefined>(
    defaultValues?.gender
  );

  // creating new user
  const [createNewUser, { loading }] = useMutation(CREATE_USER);
  const createUserHandler = () => {
    closeModal();
    createNewUser({
      variables: {
        input: {
          first_name: firstName,
          last_name: lastName,
          dob: dob,
          age: age,
          contact_number: contact,
          email: email,
          gender,
          role_id: "d97e22e2-4573-4e6c-a3f4-1893b2fed610",
          status_id: "af2e74cd-feec-4f08-b703-8eb7d32ff29e",
        },
      },
      refetchQueries: [
        {
          query: GET_USER,
        },
      ],
    });
    toast.success("Created!");
  };

  // update user
  const [updateUserInfo] = useMutation(UPDATE_USER_INFO);
  const updateUserHandler = () => {
    updateUserInfo({
      variables: {
        id,
        first_name: firstName,
        last_name: lastName,
        age,
        dob,
        email,
        contact_number: contact,
        gender,
      },
      refetchQueries: [{ query: GET_USER_BY_ID, variables: { id } }],
    });
    closeModal();
    toast.success("User Info Updated!");
  };

  const selectGenderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (title === "Create") {
      createUserHandler();
    } else {
      updateUserHandler();
    }
  };

  if (loading) return <Loader />;

  return (
    <FormWrapper>
      <form onSubmit={formSubmitHandler}>
        <h2> {title} User </h2>
        <InputControlWrapper>
          <InputGroupTitle>Name</InputGroupTitle>
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
        </InputControlWrapper>

        <InputControlWrapper>
          <InputGroupTitle>Birth Date & Age</InputGroupTitle>
          <InputWrapper>
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
        </InputControlWrapper>

        <InputControlWrapper>
          <InputGroupTitle>Gender</InputGroupTitle>
          <InputWrapper>
            <div>
              <div>
                <Input
                  type="radio"
                  id="male"
                  name="gender"
                  value={"Male"}
                  checked={gender === "Male"}
                  onChange={selectGenderHandler}
                />
                <InlineLabel htmlFor="male"> Male </InlineLabel>
              </div>
              <div>
                <Input
                  type="radio"
                  id="female"
                  name="gender"
                  value={"Female"}
                  checked={gender === "Female"}
                  onChange={selectGenderHandler}
                />
                <InlineLabel htmlFor="female"> Female </InlineLabel>
              </div>
            </div>
          </InputWrapper>
        </InputControlWrapper>

        <InputControlWrapper>
          <InputGroupTitle>Contact Info</InputGroupTitle>
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
        </InputControlWrapper>

        <InputWrapper>
          <Button type="submit" color="#9028df">
            {title} User
          </Button>
        </InputWrapper>
      </form>
    </FormWrapper>
  );
};

export default InputForm;
