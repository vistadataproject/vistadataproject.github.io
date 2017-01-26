---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU GENERIC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU GENERIC{:/}
 tag | {::nomarkdown}GENERIC{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of entries from a cross-reference passed in.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GENERIC^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | Return a set of entries from xref in REF
 Input parameters | {::nomarkdown}FROM, DIR, REF{:/}
 First comment | {::nomarkdown}<pre> .Y=returned list, FROM=text to $O from, DIR=$O direction,</pre>{:/}
 Code | {::nomarkdown}  N I,IEN,CNT S I=0,CNT=44<br> F  Q:I'<CNT  S FROM=$O(@REF@(FROM),DIR) Q:FROM=""  D<br> . S IEN="" F  S IEN=$O(@REF@(FROM,IEN),DIR) Q:'IEN  D<br> . . S I=I+1,Y(I)=IEN_"^"_FROM{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}