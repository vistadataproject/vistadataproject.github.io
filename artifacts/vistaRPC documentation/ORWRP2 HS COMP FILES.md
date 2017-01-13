---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMP FILES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMP FILES{:/}
 tag | {::nomarkdown}FILES{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets a list of files to select from for the ADHOC Health Summary.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get Files to select from for a component
 Input Parameters | {::nomarkdown}ORCOMP{:/}
 Lines | ```{::nomarkdown} D FILES^GMTSADH5(.ORY,ORCOMP)```{:/}
 Leading comment lines | {::nomarkdown}RPC => ORWRP2 HS COMP FILES{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COMP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:11:27 am