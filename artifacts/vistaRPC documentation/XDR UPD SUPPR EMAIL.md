---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XDR UPD SUPPR EMAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XDR UPD SUPPR EMAIL{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [XDRDEFLG](http://code.osehra.org/dox/Routine_XDRDEFLG_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to remotely set the field SUPPRESS NEW DUP EMAIL (#99) on theDUPLICATE RESOLUTION file (#15.1). SUPPRESS NEW DUP EMAIL is set to 1 (Yes) to suppress the email that isnormally sent when a new record is added to the DUPLICATE RECORD file byPSIM (i.e., by a call from routine XDRDADDS) If SUPPRESS NEW DUP EMAIL is set to 0 (No) or null, the email will be sent.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE NUMBER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File number for the file that is the .01 field of a record in the DUPLICATE RESOLUTION file. This is the record that is to be updated by this RPC.{:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Must be set to 1 or 0. This value will be put into the SUPPRESS NEW DUP EMAIL field.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}