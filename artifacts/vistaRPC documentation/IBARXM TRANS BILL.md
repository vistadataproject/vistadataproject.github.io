---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBARXM TRANS BILL 

 property | value 
--- | --- 
 label | {::nomarkdown}IBARXM TRANS BILL{:/}
 tag | {::nomarkdown}BILL{:/}
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc will receive data that a charge should be created for a pharmacy copayment that had previously not been charged due to the patient reaching their copayment cap amount.This RPC call does not send user data to remote side.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBICN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's ICN, to be used to identify the patient.{:/} | 
| {::nomarkdown}IBT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the transaction number to bill.{:/} | 
| {::nomarkdown}IBB{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the amount to bill.{:/} | 




 Generated on January 13th 2017, 5:52:13 am