---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY DELETE PAYMENT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAY DELETE PAYMENT{:/}
 tag | {::nomarkdown}DELPAY{:/}
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows deletion of payment data based on flags supplied, usually requires supervisor key.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}45{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FBID=IEN of Fee Basis Patient file:(1)^IEN of fee basis vendor:(2) ^IEN ofTreatment date:(3)^CPT code:(4)^Batch number:(5)provided:(5)^Batch number:(6){:/} | 




 Generated on January 13th 2017, 5:52:13 am