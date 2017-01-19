---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SVCLIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SVCLIST{:/}
 tag | {::nomarkdown}SVCLIST{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Because the combo box on the Consults order dialog needs to include ashortlist at the top, a call was needed that returned the list of consultsservices alphabetically as a long list.  This is it.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}StartFrom{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Starting service for the returned list, full or partial name.{:/} | 
| {::nomarkdown}Direction{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Direction of the lookup.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SVCLIST^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Return a set of consult services in long list format
 First comment | {::nomarkdown}<pre> .ORY=returned list, FROM=text to $O from, DIR=$O direction,</pre>{:/}
 Input parameters | {::nomarkdown}FROM<br>DIR{:/}
 Code | {::nomarkdown}  N I,IEN,CNT,Y,ORTMP,ORSVC,ORSTR<br> S I=0,CNT=44,ORSVC=""<br> D SVCTREE^ORQQCN2(.Y,1)<br> F I=1:1  S ORSVC=$P($G(Y(I)),U,2) Q:ORSVC=""  D<br> . S ORTMP(ORSVC)=Y(I)<br> F I=1:1  Q:I=CNT  S FROM=$O(ORTMP(FROM),DIR) Q:FROM=""  D<br> . S ORSTR=ORTMP(FROM)<br> . S ORY(I)=ORSTR{:/}


### CPRS

[Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}