const genUserFromTemplate = ({name, password})=> `[${name}]
type = endpoint
context = from${name}
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
username=${name}`

export const generateUsers = (users) =>{
    return users.trim()
        .split('\r')
        .map(el=> el.split(","))
        .map(([name, password])=>({name,password}))
        .map(genUserFromTemplate)
        .join('\r\n\r\n')
    

}