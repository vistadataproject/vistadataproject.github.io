---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT TITLE 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENT TITLE{:/}
 tag | {::nomarkdown}GETTITLE{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure returns the pointer to the TIU DOCUMENT DEFINITIONFILE that corresponds to the TITLE of the document identified in the TIUDAparameter.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get the title from a TIU Document Record
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | {::nomarkdown} S TIUY=+$G(^TIU(8925,+TIUDA,0)){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number (IEN) of the document in the TIUDOCUMENT FILE (#8925).{:/} | 




 Generated on January 13th 2017, 7:15:27 am