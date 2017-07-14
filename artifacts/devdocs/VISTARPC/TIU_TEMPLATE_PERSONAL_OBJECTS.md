---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE PERSONAL OBJECTS<br/>
# TIU TEMPLATE PERSONAL OBJECTS

Returns a list or Patient Data Objects allowed in Personal Templates.

## Properties

Property | Value
--- | ---
Label | PERSOBJS
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [PERSOBJS^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Returns the list of Patient Data Objects that are
First Comment | {::nomarkdown}<pre><code>         allowed to be used in Personal Templates</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N SRV<br/> K TIUY<br/> D OBJACCUM(.TIUY,"USR")<br/> S SRV=$$GETSRV(DUZ)<br/> I +SRV D OBJACCUM(.TIUY,"SRV.`"_+$G(SRV))<br/> D OBJACCUM(.TIUY,"DIV")<br/> D OBJACCUM(.TIUY,"SYS")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}