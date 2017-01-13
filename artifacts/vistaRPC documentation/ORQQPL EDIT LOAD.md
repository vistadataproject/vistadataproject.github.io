---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL EDIT LOAD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL EDIT LOAD{:/}
 tag | {::nomarkdown}EDLOAD{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return array of default fields and original fields - GMPFLD() and GMPORIG(){:/}


### Method description

 property | value 
 --- | --- 
 Method comment | LOAD  EDIT ARRAYS
 Input Parameters | {::nomarkdown}DA{:/}
 Lines | ```
 N I,GMPFLD,GMPORIG,GMPL
 D GETFLDS^GMPLEDT3(DA)
 S I=0
 D LOADFLDS(.RETURN,"GMPFLD","NEW",.I)
 D LOADFLDS(.RETURN,"GMPORIG","ORG",.I)
 K GMPFLD,GMPORIG,GMPL  ; should not have to do this```
 Leading comment lines | {::nomarkdown}DA=problem IFN{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN for problem{:/} | 
| {::nomarkdown}provider{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}vamc{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 6:55:28 am