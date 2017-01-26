---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROI4 BTCH BATCH PROCESSING 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI4 BTCH BATCH PROCESSING{:/}
 tag | {::nomarkdown}BTCH{:/}
 routine | [DSIROI4](http://code.osehra.org/dox/Routine_DSIROI4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC clones requests in a batch manner.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The type of cloning (1=multi patient, 2=multi requestors){:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IEN of the request being cloned from 19620.{:/} | 
| {::nomarkdown}SELLIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A list of requestors or patients as follows:   REQUESTOR IEN^REQUESTOR ADDRESS IEN   or   PATIENT IEN^PATIENT ADDRESS IEN^PATIENT ADDRESS IEN^ADDRESS TYPE           (PATIENT IEN MUST BE FULLY QUALIFIED){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}