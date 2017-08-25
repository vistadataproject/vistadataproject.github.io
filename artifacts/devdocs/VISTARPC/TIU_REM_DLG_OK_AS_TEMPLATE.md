---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU REM DLG OK AS TEMPLATE<br/>
# TIU REM DLG OK AS TEMPLATE

Returns TRUE is the passed in reminder dialog is allowed to be used ina TIU Template.

## Properties

Property | Value
--- | ---
Label | REMDLGOK
MUMPS Implementation | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUIEN | LITERAL |  |  | Reminder Dialog IEN.



## MUMPS Method Description

Property | Value
--- | ---
Method | [REMDLGOK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Returns TRUE if the passed in Reminder Dialog IEN is
Input Parameters | TIUIEN
First Comment | {::nomarkdown}<pre><code>                Allowed to be used as a TIU Template</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIULST,SRV<br/> S TIUY=-1<br/> I '$D(^PXRMD(801.41,+$G(TIUIEN))) Q<br/> I +$P(^PXRMD(801.41,+$G(TIUIEN),0),U,3)>0 Q  ;ICR 3410<br/> S TIUY=1<br/> D RDACCUM(.TIULST,"USR","Q")<br/> I $$RDINLST(.TIULST,TIUIEN) Q<br/> S SRV=$$GETSRV(DUZ)<br/> D RDACCUM(.TIULST,"SRV.`"_+$G(SRV),"Q")<br/> I $$RDINLST(.TIULST,TIUIEN) Q<br/> D RDACCUM(.TIULST,"DIV","Q")<br/> I $$RDINLST(.TIULST,TIUIEN) Q<br/> D RDACCUM(.TIULST,"SYS","Q")<br/> I $$RDINLST(.TIULST,TIUIEN) Q<br/> S TIUY=0</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}