---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC SIGN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORRC SIGN{:/}
 tag | {::nomarkdown}SIGN{:/}
 routine | [ORRCSIG](http://code.osehra.org/dox/Routine_ORRCSIG_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call will apply the user's electronic signature to the orders and documents in the ITEM array. It will return a boolean result for each item (indicating success or failure), with explanatory text in the event the call fails.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The hospital location. Essential in the OE/RR 3 for printing of orders,if available. Not essential for notes.{:/} | 
| {::nomarkdown}ESCODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The network encrypted signature code of the person identified in ORNP. {:/} | 
| {::nomarkdown}ITEM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The array of items to which the electronic signature is being applied. Should have the format:  ITEM(#)=DOC:### for notes, or  ITEM(#)=ORU:###^DFN^Release Flag^Signature Status^Nature of Order  ITEM(#)=ORD:###^DFN^Release Flag^Signature Status^Nature of Order{:/} | 




 Generated on January 13th 2017, 7:15:28 am