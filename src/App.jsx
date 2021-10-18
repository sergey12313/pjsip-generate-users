import React, { useState, useEffect } from "react";
import TextArea from "./components/TextArea";
import Input from "./components/Input";
import Header from "./components/Header";
import { useInput } from "./hooks";

import {
  generateUsersConfig,
  usersParse,
  generateUserList,
} from "./utils/userHandling";

const transportDefault = `[$TRANSPORT_NAME]
type=transport
allow_reload=yes
protocol=udp
bind=0.0.0.0:5060`;
const transportNameDefault = "udp-transport";
const uplinkNameDefault = "rtu";
const uplinkAorDefault =
  `[$UPLINK_NAME]\rtype=aor\rcontact=sip:$UPLINK_IP` +
  `\r\r[$UPLINK_NAME]
type=endpoint
transport=$TRANSPORT_NAME
context=from_$UPLINK_NAME
disallow=all
allow=ulaw
aors=rtu
direct_media=no` +
  `\r\r[$UPLINK_NAME]
type=identify
endpoint=$UPLINK_NAME
match=$UPLINK_IP
`;

const generateConfig = (
  transport,
  uplinkAor,
  transportName,
  uplinkName,
  uplinkIp
) => {
  const result = transport + "\r\n\r\n" + uplinkAor;

  return result
    .replaceAll("$TRANSPORT_NAME", transportName)
    .replaceAll("$UPLINK_NAME", uplinkName)
    .replaceAll("$UPLINK_IP", uplinkIp);
};

const App = () => {
  const [transportValue, setTransportValue] = useInput(transportDefault);
  const [transportName, setTransportName] = useInput(transportNameDefault);
  const [uplinkName, setUplinkName] = useInput(uplinkNameDefault);
  const [uplinkIp, setUplinkIp] = useInput("192.168.1.1");
  const [uplinkAor, serUplinkAor] = useInput(uplinkAorDefault);
  const [users, setUsers] = useInput(`200,qwerty\n"201,qwer123"`);
  const [userList, setUserList] = useState();
  const [resultStr, setResultStr] = useState("");
  useEffect(() => {
    const config = generateConfig(
      transportValue,
      uplinkAor,
      transportName,
      uplinkName,
      uplinkIp
    );
    const userParsed = usersParse(users);
    const usersConfig = generateUsersConfig(userParsed);
    const userList = generateUserList(userParsed);
    setUserList(userList);
    setResultStr(config + "\r\n\r\n" + usersConfig);
  }, [transportValue, transportName, uplinkName, uplinkIp, uplinkAor, users]);

  return (
    <div className="container terminal greed">
      <Header />
      <div className="grid">
        <Input label="$UPLINK_IP" value={uplinkIp} onChange={setUplinkIp} />
        <Input
          label="$TRANSPORT_NAME"
          value={transportName}
          onChange={setTransportName}
        />
        <Input
          label="$UPLINK_NAME"
          value={uplinkName}
          onChange={setUplinkName}
        />

        <TextArea
          value={transportValue}
          onChange={setTransportValue}
          label="Transpor"
        ></TextArea>
        <TextArea
          value={uplinkAor}
          onChange={serUplinkAor}
          label="Transport"
        ></TextArea>
        <TextArea value={users} onChange={setUsers} label="Users"></TextArea>
      </div>
      <Input value={userList} label="User list" readOnly />
      <TextArea rows={40} value={resultStr} readOnly label="Result"></TextArea>
    </div>
  );
};

export default App;
