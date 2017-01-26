---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET BOILERPLATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET BOILERPLATE{:/}
 tag | {::nomarkdown}TITLEBP{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a titles boilerplate.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Title IEN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TITLEBP^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Returns a Titles Boilerplate
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  Q:+$G(IEN)'>0<br> N I,IDX<br> S (I,IDX)=0<br> F  S IDX=$O(^TIU(8925.1,IEN,"DFLT",IDX)) Q:+IDX=0  D<br> .S I=I+1<br> .S Y(I)=^TIU(8925.1,IEN,"DFLT",IDX,0){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}