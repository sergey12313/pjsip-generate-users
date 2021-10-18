const genUserFromTemplate = ({ name, password, context }) => `[${name}]
type = endpoint
context = ${context}
disallow = all
allow = ulaw
aors = ${name}
auth = auth${name}
 
[${name}]
type = aor
max_contacts = 1
 
[auth${name}]
type=auth
auth_type=userpass
password=${password}
username=${name}`;

export const usersParse = (users) => {
  return users
    .trim()
    .split("\n")
    .map((el) => {
      const result =
        el.trim().startsWith('"') && el.endsWith('"') ? el.slice(1, -1) : el;
      return result;
    })
    .map((el) => el.split(","))
    .map(([name, password]) => ({ name, password }));
};

export const generateUsersConfig = (users,  isOneContext, oneContextName) => {
 const usersWithContext = users.map(user=> {
   return {
     context: isOneContext ? oneContextName : `from_${user.name}`,
     ...user
   }
 })

    return usersWithContext.map(genUserFromTemplate).join("\r\n\r\n");
  
  
};

export const generateUserList = (users) => {
  const usersString = users.map(({ name }) => `"${name}"`).join(", ");
  return `export const LOCAL_NUMS = [${usersString}];`;
};
