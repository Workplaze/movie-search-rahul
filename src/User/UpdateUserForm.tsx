import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  UPDATE_USER_INFO,
  GET_USER_BY_ID,
  GET_USER_ROLE_AND_STATUS,
} from "../Queries/queries";
import {
  FormWrapper,
  InputWrapper,
  Input,
  InputControlWrapper,
  InputGroupTitle,
  InlineLabel,
  Select,
} from "../Components/Form";
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
  console.log(defaultValues);
  const [firstName, setFirstName] = useState(defaultValues.first_name);
  const [lastName, setLastName] = useState(defaultValues.last_name);
  const [dob, setDob] = useState(defaultValues.dob);
  const [age, setAge] = useState(defaultValues.age);
  const [email, setEmail] = useState(defaultValues.email);
  const [contact, setContact] = useState(defaultValues.contact_number);
  const [gender, setGender] = useState(defaultValues.gender);
  const [userRole, setUserRole] = useState(defaultValues.role);
  const [userStatus, setUserStatus] = useState(defaultValues.status);
  const { data } = useQuery(GET_USER_ROLE_AND_STATUS);

  const [updateUserInfo] = useMutation(UPDATE_USER_INFO);

  const selectGenderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleUserRoleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserRole(event.target.value);
  };

  const handleUserStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserStatus(event.target.value);
  };

  const updateFormHandler = (event: any) => {
    event.preventDefault();
    updateUserInfo({
      variables: {
        id: id,
        first_name: firstName,
        last_name: lastName,
        age,
        dob,
        email,
        contact_number: contact,
        gender,
        role_id: userRole,
        status_id: userStatus,
      },
      refetchQueries: [{ query: GET_USER_BY_ID, variables: { id } }],
    });
    closeModal();
    toast.success("User Info Updated!");
  };

  return (
    <FormWrapper>
      <form onSubmit={updateFormHandler}>
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
          <InputGroupTitle>Role & Status</InputGroupTitle>
          <InputWrapper>
            <InlineLabel>Role</InlineLabel>
            <Select
              id="userRole"
              name="userRole"
              value={userRole}
              defaultValue={userRole}
              onChange={handleUserRoleChange}
            >
              {data?.user_role?.map((r: any) => (
                <option key={r.id} value={r.id}>
                  {r.role}
                </option>
              ))}
            </Select>
          </InputWrapper>
          <InputWrapper>
            <InlineLabel>Status</InlineLabel>
            <Select
              id="userStatus"
              name="userStatus"
              defaultValue={userStatus}
              value={userStatus}
              onChange={handleUserStatusChange}
            >
              {data?.user_status?.map((s: any) => (
                <option key={s.id} value={s.id}>
                  {s.status}
                </option>
              ))}
            </Select>
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
          <Button type="submit" color="#0091ff">
            Update
          </Button>
        </InputWrapper>
      </form>
    </FormWrapper>
  );
};

export default UpdateUserForm;
