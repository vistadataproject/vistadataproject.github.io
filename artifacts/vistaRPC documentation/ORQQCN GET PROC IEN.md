---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN GET PROC IEN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN GET PROC IEN{:/}
 tag | {::nomarkdown}PROCIEN{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given orderable item IEN, return pointer to file 123.3{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return pointer to file 123.3 given orderable item
 Input Parameters | {::nomarkdown}ORDITM{:/}
 Lines | ```{::nomarkdown} S ORY=+$P($G(^ORD(101.43,ORDITM,0)),U,2)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}orderable item{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 7:11:27 am