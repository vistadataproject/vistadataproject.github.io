---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET MED RESULT DETAILS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET MED RESULT DETAILS{:/}
 tag | {::nomarkdown}DISPMED{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Detailed display of medicine results.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Medicine result pointer{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DISPMED^[ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 Method comment | Detailed display of a med result
 Input parameters | {::nomarkdown}GMRCRES{:/}
 Code | {::nomarkdown}  Q:+$G(GMRCRES)=0<br> D DISPMED^GMRCGUIU(GMRCRES,.ORY)<br>{:/}


### CPRS

[Consults/rConsults.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}