---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC RESULTS BY ID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC RESULTS BY ID{:/}
 tag | {::nomarkdown}RESULT{:/}
 routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns the results for a list of orders.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORDERS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of order ID's for which to return results, in the form\ORR:###\ where ### is the order number from file #100.the corresponding M file containing the data:    ORD = Orders file #100    DOC = TIU Documents file #8925    TSK = Patient Task file #102.3{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}