---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENT STATUS{:/}
 tag | {::nomarkdown}GETSTAT{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to retrieve the Status (8925.6 IEN) of a TIU DOCUMENT.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT IEN (8925){:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETSTAT^[TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 Method comment | RPC Gets the status of TIU Doc TIUIEN
 Input parameters | {::nomarkdown}TIUIEN{:/}
 First comment | {::nomarkdown}<pre>Returns STATIEN^STATNAME</pre>{:/}
 Code | {::nomarkdown}  N TIUTTL<br> S TIUTTL=+$G(^TIU(8925,TIUIEN,0))<br> I 'TIUTTL S TIUY="0^Document does not exist" Q<br> S TIUY=$P(^TIU(8925,TIUIEN,0),U,5)<br> S TIUY=TIUY_U_$P($G(^TIU(8925.6,TIUY,0)),U,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}