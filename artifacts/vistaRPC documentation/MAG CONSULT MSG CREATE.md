---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG CONSULT MSG CREATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG CONSULT MSG CREATE{:/}
 tag | {::nomarkdown}MSG{:/}
 routine | [MAGMAPI](http://code.osehra.org/dox/Routine_MAGMAPI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Piece1=0 if failurePiece1=1 if successful  Note: you must create the mail group IMAGE TELECONSULT (RADIOLOGY) and      add members to recieve the consult notification mail message.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ number for sender of message{:/} | 
| {::nomarkdown}TXT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Message to be sent; $END$; Recipient list{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}