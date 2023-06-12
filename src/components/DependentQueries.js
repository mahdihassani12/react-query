import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUsersByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

function DependentQueries({ email }) {
  const { data: user } = useQuery(["user", email], () =>
    fetchUsersByEmail(email)
  );

  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    { enabled: !!channelId }
  );
  
  return <div>DependentQueries</div>;
}

export default DependentQueries;
