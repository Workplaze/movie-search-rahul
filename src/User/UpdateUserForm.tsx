import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_NAME, GET_USER_BY_ID } from "../Queries/queries";
import { FormWrapper, InputWrapper, Input } from "../Components/Form";
import { toast } from "react-toastify";

import { Button } from "../Components/Button";

type Props = {
  first_name: string;
  last_name: string;
  dob: string;
  age: string;
  role: string;
  status: string;
  email: string;
  contact_number: string;
  id: string;
  gender: string;
};

const UpdateUserForm = ({
  id,
  closeModal,
  defaultValues,
}: {
  defaultValues: Props;
  id: string;
  closeModal: () => void;
}) => {
  const [firstName, setFirstName] = useState(defaultValues.first_name);
  const [lastName, setLastName] = useState(defaultValues.last_name);
  const [dob, setDob] = useState(defaultValues.dob);
  const [age, setAge] = useState(defaultValues.age);
  const [email, setEmail] = useState(defaultValues.email);
  const [contact, setContact] = useState(defaultValues.contact_number);
  const [gender, setGender] = useState(defaultValues.gender);
  const [userRole, setUserRole] = useState(defaultValues.role);
  const [userStatus, setUserStatus] = useState(defaultValues.status);

  const [updateUserName] = useMutation(UPDATE_NAME);

  const updateFormHandler = (event: any) => {
    event.preventDefault();
    updateUserName({
      variables: {
        id: id,
        first_name: firstName,
        last_name: lastName,
      },
      refetchQueries: [{ query: GET_USER_BY_ID, variables: { id } }],
    });
    closeModal();
    toast.success("User Date Updated!");
  };

  return (
    <FormWrapper>
      <form onSubmit={updateFormHandler}>
        <InputWrapper>
          <Input
            type="text"
            required
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            required
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Button type="submit" color="dodgerblue">
            Update
          </Button>
        </InputWrapper>
      </form>
    </FormWrapper>
  );
};

export default UpdateUserForm;
