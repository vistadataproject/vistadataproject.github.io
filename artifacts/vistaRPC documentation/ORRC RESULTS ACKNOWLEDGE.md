---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC RESULTS ACKNOWLEDGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC RESULTS ACKNOWLEDGE{:/}
 tag | {::nomarkdown}ACK{:/}
 routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will mark new results as being acknowledged by the user; itwill return a true or false value for each order ID if successfully saved.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}ORDERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of order ID's whose results may be acknowledged, in theform \ORR:###^1\ where ### is the order number from file #100 and thesecond ^-piece is either 1 or 0 if the order was acknowledged.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}