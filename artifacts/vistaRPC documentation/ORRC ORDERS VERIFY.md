---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC ORDERS VERIFY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRC ORDERS VERIFY{:/}
 tag | {::nomarkdown}VERIFY{:/}
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call accepts a list of order IDs to be marked as verified.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}ORDERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of order identifiers in the form ORV:order#;action#, whereorder# is the pointer to the Orders file #100 and action# is the IEN inthe Order Actions sub-file.{:/} | 




 Generated on January 13th 2017, 6:15:57 am