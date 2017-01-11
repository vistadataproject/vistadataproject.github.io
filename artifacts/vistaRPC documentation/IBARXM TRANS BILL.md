---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBARXM TRANS BILL 

 property | value 
--- | --- 
 label | IBARXM TRANS BILL
 tag | BILL
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | SINGLE VALUE
 description | This rpc will receive data that a charge should be created for a pharmacy copayment that had previously not been charged due to the patient reaching their copayment cap amount.This RPC call does not send user data to remote side.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBICN | LITERAL |  | true | This is the patient's ICN, to be used to identify the patient. | 
| IBT | LITERAL |  | true | This is the transaction number to bill. | 
| IBB | LITERAL |  | true | This is the amount to bill. | 




Generated on January 11th 2017, 6:34:23 am