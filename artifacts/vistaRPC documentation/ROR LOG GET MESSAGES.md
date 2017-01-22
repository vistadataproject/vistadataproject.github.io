---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LOG GET MESSAGES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LOG GET MESSAGES{:/}
 tag | {::nomarkdown}MSGLIST{:/}
 routine | [RORRP007](http://code.osehra.org/dox/Routine_RORRP007_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LOG GET MESSAGES remote procedure returns a list of messages fromthe log defined by the parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOGIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The LOGIEN parameter defines the log. It should contain a valid IEN of thelog record in the ROR LOG file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}