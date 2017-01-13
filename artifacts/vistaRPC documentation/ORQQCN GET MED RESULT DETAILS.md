---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET MED RESULT DETAILS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET MED RESULT DETAILS{:/}
 tag | {::nomarkdown}DISPMED{:/}
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Detailed display of medicine results.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Detailed display of a med result
 Input Parameters | {::nomarkdown}GMRCRES{:/}
 Lines | ```
 Q:+$G(GMRCRES)=0
 D DISPMED^GMRCGUIU(GMRCRES,.ORY)
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Medicine result pointer{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Variable pointer to medicine result.{:/} | 




 Generated on January 13th 2017, 6:55:29 am