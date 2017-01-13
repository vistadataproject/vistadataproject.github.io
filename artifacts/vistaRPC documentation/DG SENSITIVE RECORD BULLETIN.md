---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DG SENSITIVE RECORD BULLETIN 

 property | value 
--- | --- 
 label | {::nomarkdown}DG SENSITIVE RECORD BULLETIN{:/}
 tag | {::nomarkdown}NOTICE{:/}
 routine | [DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) will add an entry to the DG SECURITY LOG(#38.1) file and/or generate the sensitive record access bulletindepending on the value in ACTION input parameter.  If ACTION parameter notdefined, defaults to update DG Security Log file and generate SensitiveRecord Access mail message.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC/API entry point for log entry and message generation
 Input Parameters | {::nomarkdown}DFN<br/>DGOPT<br/>ACTION{:/}
 Lines | ```
 I $G(DFN)="" S RESULT=0 Q
 I $G(DUZ)="" S RESULT=0 Q
 S DGOPT=$G(DGOPT)
 I $G(ACTION)="" S ACTION=3
 I ACTION'=1 D BULTIN1^DGSEC(DFN,DUZ,DGOPT)
 I ACTION'=2 D SETLOG1^DGSEC(DFN,DUZ,,DGOPT)
 S RESULT=1```
 Leading comment lines | {::nomarkdown}Input parameters:  <br/>DFN    = Patient file DFN<br/>DGOPT  = Option name^Menu text (Optional)<br/>ACTION = 1 - Set DG Security Log entry, 2 - Generate mail <br/>message, 3 - Both (Optional - Defaults to both)<br/>Output:  RESULT = 1 - DG Security Log updated and/or Sensitive Record msg sent (Determined by ACTION value)<br/>0 - Required variable undefined{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ACTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ACTION = 1 - Set DG Security Log entry         2 - Generate Sensitive Record Access bulletin         3 - Both{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DFN = Patient (#2) file DFN{:/} | 
| {::nomarkdown}DGOPT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DGOPT = Option Name^Menu test         If not defined, OP^XQCHK identifies option or defaults to UNKNOWN.{:/} | 




 Generated on January 13th 2017, 6:55:29 am