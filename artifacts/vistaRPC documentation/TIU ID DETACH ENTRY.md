---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU ID DETACH ENTRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU ID DETACH ENTRY{:/}
 tag | {::nomarkdown}IDDTCH{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call will remove an ID Entry from an Interdisciplinary Note.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the ID Entry which is to be removedfrom the ID Note.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | IDDTCH^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Detach TIUDA from its ID Parent
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TIUX,IDDAD<br> I '+$G(^TIU(8925,TIUDA,21)) D  Q<br> . S TIUY="0^Record #"_TIUDA_" is NOT an ID Entry."<br> S IDDAD=+$G(^TIU(8925,TIUDA,21))<br> S TIUX(2101)="@"<br> D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX,1)<br> D AUDLINK^TIUGR1(TIUDA,"d",IDDAD)<br> D IDDEL^TIUALRT1(TIUDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}