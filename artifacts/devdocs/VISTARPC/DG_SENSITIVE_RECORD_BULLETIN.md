---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DG SENSITIVE RECORD BULLETIN
# DG SENSITIVE RECORD BULLETIN

This Remote Procedure Call (RPC) will add an entry to the DG SECURITY LOG(#38.1) file and/or generate the sensitive record access bulletindepending on the value in ACTION input parameter.  If ACTION parameter notdefined, defaults to update DG Security Log file and generate SensitiveRecord Access mail message.

Property | Value
--- | ---
Label | NOTICE
Routine | [DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACTION | LITERAL | 1 | true | ACTION &#x3D; 1 - Set DG Security Log entry         2 - Generate Sensitive Record Access bulletin         3 - Both
DFN | LITERAL |  | true | DFN &#x3D; Patient (#2) file DFN
DGOPT | LITERAL |  | true | DGOPT &#x3D; Option Name^Menu test         If not defined, OP^XQCHK identifies option or defaults to UNKNOWN.



### MUMPS Method Description

Property | Value
--- | ---
Method | [NOTICE^DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)
Method Comment | RPC/API entry point for log entry and message generation
Input Parameters | DFN, DGOPT, ACTION
First Comment | {::nomarkdown}<pre><code>Input parameters:  <br/>  DFN    = Patient file DFN<br/>  DGOPT  = Option name^Menu text (Optional)<br/>  ACTION = 1 - Set DG Security Log entry, 2 - Generate mail <br/>           message, 3 - Both (Optional - Defaults to both)<br/><br/>Output:  RESULT = 1 - DG Security Log updated and/or Sensitive Record msg sent (Determined by ACTION value)<br/>                  0 - Required variable undefined<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> I $G(DFN)="" S RESULT=0 Q<br/> I $G(DUZ)="" S RESULT=0 Q<br/> S DGOPT=$G(DGOPT)<br/> I $G(ACTION)="" S ACTION=3<br/> I ACTION'=1 D BULTIN1^DGSEC(DFN,DUZ,DGOPT)<br/> I ACTION'=2 D SETLOG1^DGSEC(DFN,DUZ,,DGOPT)<br/> S RESULT=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}