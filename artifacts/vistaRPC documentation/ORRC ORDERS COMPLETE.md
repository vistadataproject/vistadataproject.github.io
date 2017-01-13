---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC ORDERS COMPLETE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRC ORDERS COMPLETE{:/}
 tag | {::nomarkdown}COMP{:/}
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call accepts a list of order IDs to be marked as completed.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}ORDERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of order identifiers in the form ORN:order#;action# whereorder# is the pointer to the Orders file #100 and action# is the IEN inthe Order Actions sub-file.{:/} | 




 Generated on January 13th 2017, 6:44:47 am