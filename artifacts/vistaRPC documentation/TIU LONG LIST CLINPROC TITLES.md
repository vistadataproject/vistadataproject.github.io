---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LONG LIST CLINPROC TITLES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST CLINPROC TITLES{:/}
 tag | {::nomarkdown}LNGCP{:/}
 routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC serves data to a longlist of selectable Titles for CLINICALPROCEDURES.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC that serves data to a longlist of selectable Titles
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | ```{::nomarkdown} N TIUCLASS<br/> I '$D(FROM) G LNGCPQ<br/> S TIUCLASS=+$$CLASS<br/> I +TIUCLASS'>0 G LNGCPQ<br/> D LONGLIST^TIUSRVD(.Y,TIUCLASS,FROM,$G(DIR,1))```{:/}
 Leading comment lines | {::nomarkdown}Input  -- FROM     Reference Title from which the longlist is<br/>scrolling<br/>DIR      Direction from which the longlist is scrolling<br/>from the reference Title  (Optional- default 1)<br/>Output -- Y        An array of the 44 nearest Titles to that indicated<br/>by the user in the direction passed by the longlist<br/>component{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the reference Title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference Title.{:/} | 




 Generated on January 13th 2017, 7:11:27 am