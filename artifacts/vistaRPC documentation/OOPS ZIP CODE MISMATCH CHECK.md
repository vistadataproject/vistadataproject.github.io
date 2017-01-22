---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS ZIP CODE MISMATCH CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS ZIP CODE MISMATCH CHECK{:/}
 tag | {::nomarkdown}ZIPCHK{:/}
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call will take the Zip Code and State Name and validate that theZip Code exists and is valid for the State.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter will contain the Zip Code and the State name to validate in theformat ZIPCODE^STATENAME. The zip code will be validated to ensure that itexists and then will obtain the State from the zip code file and check itagainst the cooresponding State entered by the user.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}