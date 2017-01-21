---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG CAPTURE USERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG CAPTURE USERS{:/}
 tag | {::nomarkdown}USERS{:/}
 routine | [MAGGA03U](http://code.osehra.org/dox/Routine_MAGGA03U_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call will find users that have captured images in a date range.The list of users can be filtered by the FLAGS parameterThe Flags Parameter can contain'C' for images captured on the Capture Workstation  and/or'I' for images captured throught the Import API.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The Flags Parameter can contain'C' for images captured on the Capture Workstationand/or'I' for images captured throught the Import API.  If the parameter is null it defaults to 'CI'.{:/} | 
| {::nomarkdown}FROMDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The earliest Date to search for users.{:/} | 
| {::nomarkdown}TODATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The latest Date to search for users.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}