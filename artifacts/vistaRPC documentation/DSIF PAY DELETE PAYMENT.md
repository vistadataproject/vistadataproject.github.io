---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF PAY DELETE PAYMENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAY DELETE PAYMENT{:/}
 tag | {::nomarkdown}DELPAY{:/}
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows deletion of payment data based on flags supplied, usually requires supervisor key.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}45{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FBID=IEN of Fee Basis Patient file:(1)^IEN of fee basis vendor:(2) ^IEN ofTreatment date:(3)^CPT code:(4)^Batch number:(5)provided:(5)^Batch number:(6){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}