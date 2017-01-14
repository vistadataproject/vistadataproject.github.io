---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPXRM WOMEN HEALTH SAVE 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM WOMEN HEALTH SAVE{:/}
 tag | {::nomarkdown}WH{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Pass back data to be file in the Women's Health Package file 790.1.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WH RESULT{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | WH^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}ORRESULT{:/}
 Code | ```  D WH^PXRMRPCC(.ORY,.ORRESULT) Q```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}