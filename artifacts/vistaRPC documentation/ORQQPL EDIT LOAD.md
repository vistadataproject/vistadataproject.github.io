---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL EDIT LOAD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL EDIT LOAD{:/}
 tag | {::nomarkdown}EDLOAD{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return array of default fields and original fields - GMPFLD() and GMPORIG(){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN for problem{:/} | 
| {::nomarkdown}provider{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}vamc{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | EDLOAD^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | LOAD  EDIT ARRAYS
 First comment | {::nomarkdown}DA=problem IFN{:/}
 Input parameters | {::nomarkdown}DA{:/}
 Code | {::nomarkdown}  N I,GMPFLD,GMPORIG,GMPL<br> D GETFLDS^GMPLEDT3(DA)<br> S I=0<br> D LOADFLDS(.RETURN,"GMPFLD","NEW",.I)<br> D LOADFLDS(.RETURN,"GMPORIG","ORG",.I)<br> K GMPFLD,GMPORIG,GMPL  ; should not have to do this{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}