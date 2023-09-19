import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_NAME, GET_USER_BY_ID } from "../Queries/queries";
import { FormWrapper, InputWrapper, Input } from "../Components/Form";

import { Button } from "../Components/Button";

const UpdateUserForm = ({
  id,
  closeModal,
  defaultValues
}: {
  defaultValues: {first_name: string, last_name:string}
  id: string;
  closeModal: () => void;
}) => {
  const [firstName, setFirstName] = useState(defaultValues.first_name);
  const [lastName, setLastName] = useState(defaultValues.last_name);

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
