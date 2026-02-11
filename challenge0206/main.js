let codeFlags = [
  {code : "AL" , flag: "🇦🇱"},
  {code : "AD" , flag: "🇦🇩"},
  {code : "AR" , flag: "🇦🇷"},
  {code : "AM" , flag: "🇦🇲"},
  {code : "AU" , flag: "🇦🇺"},
   {code : "AT" , flag: "🇦🇹"},
  {code : "AZ" , flag: "🇦🇿"},
  {code : "BE" , flag: "🇧🇪"},
  {code : "BJ" , flag: "🇧🇯"},
  {code : "BO" , flag: "🇧🇴"},
  {code : "BA" , flag: "🇧🇦"},
  {code : "BR" , flag: "🇧🇷"},
  {code : "BG" , flag: "🇧🇬"},
  {code : "CA" , flag: "🇨🇦"},
  {code : "CL" , flag: "🇨🇱"},
  {code : "CN" , flag: "🇨🇳"},
  {code : "CO" , flag: "🇨🇴"},
  {code : "HR" , flag: "🇭🇷"},
  
]


function getFlag(code) {
    const result = codeFlags.find(item => item.code === code);

    return result ? result.flag : "Flag not found";
}
console.log(getFlag("CN"));