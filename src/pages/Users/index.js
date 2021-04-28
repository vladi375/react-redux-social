import React, { Component, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/UsersActions";

import { Card } from "../../components";
import "./style.css";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // componentDidMount = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/users");
  //     this.setState({ users: response.data });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="page">
      <div className="page-users">
        {users.map((item, i) => {
          return (
            <Link to={`/users/${item.index}`} key={item._id}>
              <Card
                picture={item.picture}
                name={item.name}
                index={item.index}
                id={item._id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { UsersPage };
