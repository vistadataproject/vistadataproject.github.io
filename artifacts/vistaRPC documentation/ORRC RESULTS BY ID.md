---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRC RESULTS BY ID 

 property | value 
--- | --- 
 label | ORRC RESULTS BY ID
 tag | RESULT
 routine | [ORRCACK](http://code.osehra.org/dox/Routine_ORRCACK_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns the results for a list of orders.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORDERS | LIST |  | true | This is the list of order ID's for which to return results, in the form\ORR:###\ where ### is the order number from file #100.the corresponding M file containing the data:    ORD = Orders file #100    DOC = TIU Documents file #8925    TSK = Patient Task file #102.3 | 