---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DG SENSITIVE RECORD BULLETIN 

 property | value 
--- | --- 
 label | DG SENSITIVE RECORD BULLETIN
 tag | NOTICE
 routine | [DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure Call (RPC) will add an entry to the DG SECURITY LOG(#38.1) file and/or generate the sensitive record access bulletindepending on the value in ACTION input parameter.  If ACTION parameter notdefined, defaults to update DG Security Log file and generate SensitiveRecord Access mail message.


### Method description

 property | value 
--- | --- 
 Method comment | RPC/API entry point for log entry and message generation
 Leading comment lines | Input parameters:  ,DFN    = Patient file DFN,DGOPT  = Option name^Menu text (Optional),ACTION = 1 - Set DG Security Log entry, 2 - Generate mail ,message, 3 - Both (Optional - Defaults to both),Output:  RESULT = 1 - DG Security Log updated and/or Sensitive Record msg sent (Determined by ACTION value),0 - Required variable undefined

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ACTION | LITERAL | 1 | true | ACTION = 1 - Set DG Security Log entry         2 - Generate Sensitive Record Access bulletin         3 - Both | 
| DFN | LITERAL |  | true | DFN = Patient (#2) file DFN | 
| DGOPT | LITERAL |  | true | DGOPT = Option Name^Menu test         If not defined, OP^XQCHK identifies option or defaults to UNKNOWN. | 




Generated on January 11th 2017, 6:34:23 am