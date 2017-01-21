---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU USER CLASS LONG LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU USER CLASS LONG LIST{:/}
 tag | {::nomarkdown}CLSLIST{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Long List of User Classes{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} |  |  |  |  | 
| {::nomarkdown}DIR{:/} |  |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLSLIST^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Long List of Active User Classes
 Input parameters | {::nomarkdown}FROM, DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S I=0,CNT=44<br> F  Q:(I'<CNT)  S FROM=$O(^USR(8930,"B",FROM),DIR) Q:(FROM="")  D<br> . S IEN=$O(^USR(8930,"B",FROM,0)) I $P(^USR(8930,IEN,0),U,3)="0" Q<br> . S I=I+1,ORY(I)=IEN_"^"_FROM{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}