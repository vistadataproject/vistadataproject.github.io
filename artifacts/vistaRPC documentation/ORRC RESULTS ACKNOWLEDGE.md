---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC RESULTS ACKNOWLEDGE 

 property | value 
--- | --- 
 label | ORRC RESULTS ACKNOWLEDGE
 tag | ACK
 routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
 return value type | ARRAY
 description | This call will mark new results as being acknowledged by the user; itwill return a true or false value for each order ID if successfully saved.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200. | 
| ORDERS | LIST |  | true | This is the list of order ID's whose results may be acknowledged, in theform \ORR:###^1\ where ### is the order number from file #100 and thesecond ^-piece is either 1 or 0 if the order was acknowledged. | 