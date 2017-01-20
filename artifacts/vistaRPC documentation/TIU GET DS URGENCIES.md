---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DS URGENCIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DS URGENCIES{:/}
 tag | {::nomarkdown}URGENCY{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of discharge summary urgencies for use in a long list box.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | URGENCY^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | retrieve set values from dd for discharge summary urgency
 Code | {::nomarkdown}  N TIUDD,TIUI,TIUX<br> D FIELD^DID(8925,.09,"","POINTER","TIUDD")<br> F TIUI=1:1 S TIUX=$P(TIUDD("POINTER"),";",TIUI) Q:TIUX=""   S TIUY(TIUI)=$TR(TIUX,":","^"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rDCSumm.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}