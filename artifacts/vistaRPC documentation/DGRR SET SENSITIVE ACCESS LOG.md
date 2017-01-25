---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DGRR SET SENSITIVE ACCESS LOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DGRR SET SENSITIVE ACCESS LOG{:/}
 tag | {::nomarkdown}NOTICE{:/}
 routine | [DGRRLU2](http://code.osehra.org/dox/Routine_DGRRLU2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) will add an entry to the DG SECURITY LOG(#38.1) file and/or generate the sensitive record access bulletindepending on the value in ACTION input parameter.  If ACTION parameter notdefined, defaults to update DG Security Log file and generate SensitiveRecord Access mail message.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ACTION = 1 - Set DG Security Log entry         2 - Generate Sensitive Record Access bulletin         3 - Both{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DFN = Patient (#2) file DFN{:/} | 
| {::nomarkdown}DGOPT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DGOPT = Option Name^Menu test         If not defined, OP^XQCHK identifies option or defaults to UNKNOWN.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}