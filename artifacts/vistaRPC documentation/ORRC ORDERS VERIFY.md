---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC ORDERS VERIFY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC ORDERS VERIFY{:/}
 tag | {::nomarkdown}VERIFY{:/}
 routine | [ORRCOR](http://code.osehra.org/dox/Routine_ORRCOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call accepts a list of order IDs to be marked as verified.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}ORDERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a list of order identifiers in the form ORV:order#;action#, whereorder# is the pointer to the Orders file #100 and action# is the IEN inthe Order Actions sub-file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}