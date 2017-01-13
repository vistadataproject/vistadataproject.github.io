---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU JUSTIFY DELETE? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU JUSTIFY DELETE?{:/}
 tag | {::nomarkdown}NEEDJUST{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC that evaluates wheter a justification is required for deletion (e.g., deletion is authorized, but the document has been signed, etc.).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is justification required for deletion?
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```{::nomarkdown} N TIUD0 S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUY=0<br/> I +$P(TIUD0,U,5)'<6 S TIUY=1```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the record number (IEN) of the document in file 8925.{:/} | 




 Generated on January 13th 2017, 7:11:26 am