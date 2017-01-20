---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IS USER A PROVIDER? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS USER A PROVIDER?{:/}
 tag | {::nomarkdown}ISAPROV{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean RPC returns TRUE if the user was a known provider on the date specified.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional pointer to the NEW PERSON FILE (#200). If user is unspecified the current user will be assumed.{:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional FileMan formatted date (time). If none is provided the current date is assumed.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISAPROV^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Is user a provider?
 First comment | {::nomarkdown}<pre> Checks USR CLASS PROVIDER AND 200 Person Class<br/> DATE must not include time (for ISA^USRLM)</pre>{:/}
 Input parameters | {::nomarkdown}USER<br>DATE{:/}
 Code | {::nomarkdown}  S USER=$G(USER,DUZ)<br> S DATE=$G(DATE,DT)<br> S TIUY=$$PROVIDER^TIUPXAP1(USER,DATE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}