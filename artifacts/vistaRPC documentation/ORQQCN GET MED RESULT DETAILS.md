---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN GET MED RESULT DETAILS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET MED RESULT DETAILS{:/}
 tag | {::nomarkdown}DISPMED{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Detailed display of medicine results.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Medicine result pointer{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DISPMED^[ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 Method comment | Detailed display of a med result
 Input parameters | {::nomarkdown}GMRCRES{:/}
 Code | ```  Q:+$G(GMRCRES)=0
 D DISPMED^GMRCGUIU(GMRCRES,.ORY)
```




 Generated on January 14th 2017, 7:26:35 am