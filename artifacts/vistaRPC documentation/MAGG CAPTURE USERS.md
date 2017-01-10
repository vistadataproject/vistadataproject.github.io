---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG CAPTURE USERS 

 property | value 
--- | --- 
 label | MAGG CAPTURE USERS
 tag | USERS
 routine | [MAGGA03U](http://code.osehra.org/dox/Routine_MAGGA03U_source.html)
 return value type | GLOBAL ARRAY
 description | This call will find users that have captured images in a date range.The list of users can be filtered by the FLAGS parameterThe Flags Parameter can contain'C' for images captured on the Capture Workstation  and/or'I' for images captured throught the Import API.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 20 | true | The Flags Parameter can contain'C' for images captured on the Capture Workstationand/or'I' for images captured throught the Import API.  If the parameter is null it defaults to 'CI'. | 
| vs:Input_Parameter-8994_02 | FROMDATE | LITERAL | 20 | true | The earliest Date to search for users. | 
| vs:Input_Parameter-8994_02 | TODATE | LITERAL | 20 | true | The latest Date to search for users. | 