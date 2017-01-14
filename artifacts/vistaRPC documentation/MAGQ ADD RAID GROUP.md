---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGQ ADD RAID GROUP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ ADD RAID GROUP{:/}
 tag | {::nomarkdown}ADDRG{:/}
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is used to create the next RAID group for the Network Locationfile (#2005.2).  It will generate a group name that includes the sites namespace and the next logical sequence number.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value determines the number of RAID groups to be added to the sitesNetwork Location file (#2005.2).{:/} | 
| {::nomarkdown}PLACE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} |  | {::nomarkdown}This is the place value, an entry in the IMAGING SITE PARAMETER (#2006.1)file, for the RAID group entry being defined.{:/} | 




 Generated on January 14th 2017, 7:26:36 am