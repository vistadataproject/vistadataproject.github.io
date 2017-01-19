---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ DFNIQ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ DFNIQ{:/}
 tag | {::nomarkdown}DFNIQ{:/}
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This provides a method of sending a Patient DFN VistA mail message from client methods.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the message content that is sent if the Send Flag is set.{:/} | 
| {::nomarkdown}PLACE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the site parameter file that designates the local Imaging configuration from which this messageis addressed.{:/} | 
| {::nomarkdown}SEND{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If this is the last line of the message and if this value is set to\1\ then the message will be sent.{:/} | 
| {::nomarkdown}APPLICATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}36{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value is set to the application that has created this message.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}