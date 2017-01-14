---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF PAY ALL PAYMENTS DISPLAY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAY ALL PAYMENTS DISPLAY{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Input DFN and Vendor IEN, to get a list of existing payments.Optional parameters are Date of service (FM date) and CPT IEN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}VENDOR IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DATE OF SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date of service FM format (optional) **Unless you enter a CPT code, then it is required!{:/} | 
| {::nomarkdown}CPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CPT code, external value.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}