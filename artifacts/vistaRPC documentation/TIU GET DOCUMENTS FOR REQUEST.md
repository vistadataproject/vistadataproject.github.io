---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENTS FOR REQUEST 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENTS FOR REQUEST{:/}
 tag | {::nomarkdown}GETDOCS{:/}
 routine | [TIUSRVLR](http://code.osehra.org/dox/Routine_TIUSRVLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the list of documents associated with agiven Request (e.g., Consult Request, or Surgical Case).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get TIU Documents for a given Consult or
 Leading comment lines | {::nomarkdown}Surgical Case{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OVP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the variable pointer (e.g., \12745;GMR(123,\ or \14672;SRF(\) thatidentifies the record in the requesting application.{:/} | 




 Generated on January 13th 2017, 6:44:47 am