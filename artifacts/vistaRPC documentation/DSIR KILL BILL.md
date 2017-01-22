---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR KILL BILL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR KILL BILL{:/}
 tag | {::nomarkdown}KILLBILL{:/}
 routine | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will delete a bill and all related entries in the DSIR BILL HISTORY and DSIR BILL TRACKING files.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BILL IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Number to file 19620.2 DISR BILLS.{:/} | 
| {::nomarkdown}ADMIN OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a set of codes 0 = No, 1 = Yes to override the checking for any payments and delete the bill and all payments.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}