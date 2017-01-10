---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ ADD RAID GROUP 

 property | value 
--- | --- 
 label | MAGQ ADD RAID GROUP
 tag | ADDRG
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | SINGLE VALUE
 description | This is used to create the next RAID group for the Network Locationfile (#2005.2).  It will generate a group name that includes the sites namespace and the next logical sequence number.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL | 99 | true | This value determines the number of RAID groups to be added to the sitesNetwork Location file (#2005.2). | 
| vs:Input_Parameter-8994_02 | PLACE | LITERAL | 99 |  | This is the place value, an entry in the IMAGING SITE PARAMETER (#2006.1)file, for the RAID group entry being defined. | 