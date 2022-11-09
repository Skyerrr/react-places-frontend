import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Felipe Gimenes",
      image:
        "https://scontent.fsdu38-1.fna.fbcdn.net/v/t1.18169-9/12573700_735142189950709_1936462802677245847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=ixSch53iZMMAX8z0N1T&_nc_oc=AQlys0NXPLjtEjrSeWaD0GVADyKR75E99LztbJ1I5FbRxmFnPhQyiR8MAbkhe-gLpqk85V1HOIsMDMoM6H5YZuRA&_nc_ht=scontent.fsdu38-1.fna&oh=00_AfD4FPKRu2UjHPTGdo3mmEE6sEb0FnY4hg_1px1MKow0Yg&oe=63934C8D",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
