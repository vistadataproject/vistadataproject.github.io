---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMP FILES 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMP FILES{:/}
 tag | {::nomarkdown}FILES{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets a list of files to select from for the ADHOC Health Summary.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}COMP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FILES^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get Files to select from for a component
 First comment | {::nomarkdown}RPC => ORWRP2 HS COMP FILES{:/}
 Input parameters | {::nomarkdown}ORCOMP{:/}
 Code | ```  D FILES^GMTSADH5(.ORY,ORCOMP)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}