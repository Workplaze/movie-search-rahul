import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USER,
  GET_USER,
  GET_USER_ROLE_AND_STATUS,
} from "../Queries/queries";

import { Button } from "../Components/Button";
import Loader from "../Components/Loader";
import {
  FormWrapper,
  InputWrapper,
  Label,
  InlineLabel,
  Input,
} from "../Components/Form";

import { toast } from "react-toastify";

const NewUserForm = ({ closeModal }: { closeModal: () => void }) => {
  const [createNewUser, { loading }] = useMutation(CREATE_USER);
  const { data } = useQuery(GET_USER_ROLE_AND_STATUS);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("Male");
  const [userRole, setUserRole] = useState("");
  const [userStatus, setUserStatus] = useState("");

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

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
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
          role_id: userRole,
          status_id: userStatus,
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

        <section>
          <label htmlFor="userRole">User Role:</label>
          <select
            id="userRole"
            name="userRole"
            value={userRole}
            onChange={handleUserRoleChange}
          >
            {data?.user_role?.map((r: any) => (
              <option key={r.id} value={r.id}>
                {r.role}
              </option>
            ))}
          </select>

          <label htmlFor="userStatus">User Status:</label>
          <select
            id="userStatus"
            name="userStatus"
            value={userStatus}
            onChange={handleUserStatusChange}
          >
            {data?.user_status?.map((s: any) => (
              <option key={s.id} value={s.id}>
                {s.status}
              </option>
            ))}
          </select>
        </section>

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
