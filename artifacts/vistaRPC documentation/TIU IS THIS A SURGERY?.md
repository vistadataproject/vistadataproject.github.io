---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU IS THIS A SURGERY? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU IS THIS A SURGERY?{:/}
 tag | {::nomarkdown}ISSURG{:/}
 routine | [TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC which evaluates whether the title indicated is that of aSURGICAL REPORT or PROCEDURE REPORT (NON-O.R.).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the record number in file 8925.1 for the title selected.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISSURG^[TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html)
 Method comment | Boolean RPC to evaluate whether TITLE is a SURGERY REPORT
 Input parameters | {::nomarkdown}TITLE{:/}
 Code | {::nomarkdown}  N TIUCLASS,TIUI S TIUY=0<br> F TIUI="SURGICAL REPORTS","PROCEDURE REPORTS (NON-O.R.)" D  Q:TIUY>0<br> . S TIUCLASS=+$$CLASS(TIUI)<br> . I +TIUCLASS'>0 Q<br> . S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}