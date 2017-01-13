---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET PRINT NAME 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PRINT NAME{:/}
 tag | {::nomarkdown}GETPNAME{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure receives a pointer to the TIU DOCUMENT DEFINITIONFILE (#8925.1) and returns a string containing the Print Name of thecorresponding Document Definition.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get Print Name of a Document
 Input Parameters | {::nomarkdown}TIUTYPE{:/}
 Lines | ```{::nomarkdown} S TIUY=$$PNAME^TIULC1(TIUTYPE)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1).{:/} | 




 Generated on January 13th 2017, 7:11:26 am